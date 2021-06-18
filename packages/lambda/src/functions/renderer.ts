import {InvokeCommand} from '@aws-sdk/client-lambda';
import {renderFrames, stitchFramesToVideo} from '@remotion/renderer';
import fs from 'fs';
import path from 'path';
import {lambdaClient} from '../shared/aws-clients';
import {
	chunkKey,
	getRendererErrorKeyPrefix,
	lambdaInitializedKey,
	LambdaPayload,
	LambdaPayloads,
	LambdaRoutines,
} from '../shared/constants';
import {randomHash} from '../shared/random-hash';
import {tmpDir} from '../shared/tmpdir';
import {
	ChunkTimingData,
	ObjectChunkTimingData,
} from './chunk-optimization/types';
import {getBrowserInstance} from './helpers/get-browser-instance';
import {lambdaWriteFile} from './helpers/io';
import {timer} from './helpers/timer';

const renderHandler = async (params: LambdaPayload) => {
	if (params.type !== LambdaRoutines.renderer) {
		throw new Error('Params must be renderer');
	}

	const browserInstance = await getBrowserInstance();
	const outputDir = '/tmp/remotion-render-' + randomHash();
	if (fs.existsSync(outputDir)) {
		(fs.rmSync ?? fs.rmdirSync)(outputDir);
	}

	fs.mkdirSync(outputDir);

	if (typeof params.chunk !== 'number') {
		throw new Error('must pass chunk');
	}

	if (!params.frameRange) {
		throw new Error('must pass framerange');
	}

	const start = Date.now();
	const chunkTimingData: ObjectChunkTimingData = {
		timings: {},
		chunk: params.chunk,
		frameRange: params.frameRange,
		startDate: start,
	};
	const {assetsInfo} = await renderFrames({
		compositionId: params.composition,
		config: {
			durationInFrames: params.durationInFrames,
			fps: params.fps,
			height: params.height,
			width: params.width,
		},
		imageFormat: params.imageFormat,
		inputProps: params.inputProps,
		frameRange: params.frameRange,

		onFrameUpdate: (i: number, output: string, frameNumber: number) => {
			chunkTimingData.timings[frameNumber] = Date.now() - start;
			if (i === 1) {
				lambdaWriteFile({
					bucketName: params.bucketName,
					body: '0',
					key: `${lambdaInitializedKey(params.renderId)}-${params.chunk}.txt`,
				});
			}

			console.log('Rendered frames', i, output);
		},
		parallelism: 1,
		onStart: () => {
			console.log('Starting');
		},
		outputDir,
		puppeteerInstance: browserInstance,
		serveUrl: params.serveUrl,
		bundleDir: null,
		quality: params.quality,
		envVariables: params.envVariables,
		onError: () => {
			// TODO handle error
		},
		browser: 'chrome',
		dumpBrowserLogs: false,
	});
	const condensedTimingData: ChunkTimingData = {
		...chunkTimingData,
		timings: Object.values(chunkTimingData.timings),
	};
	const uploadMetricsData = lambdaWriteFile({
		bucketName: params.bucketName,
		body: JSON.stringify(condensedTimingData as ChunkTimingData, null, 2),
		key: `${lambdaInitializedKey(params.renderId)}-${params.chunk}.txt`,
	});
	const outdir = tmpDir('bucket');

	const outputLocation = path.join(
		outdir,
		`localchunk-${String(params.chunk).padStart(8, '0')}.mkv`
	);

	const stitchLabel = timer('stitcher');
	await stitchFramesToVideo({
		assetsInfo: {
			...assetsInfo,
			// Make all assets remote
			assets: assetsInfo.assets.map((asset) => {
				return asset.map((a) => {
					return {
						...a,
						isRemote: true,
					};
				});
			}),
		},
		downloadDir: '/tmp',
		dir: outputDir,
		force: true,
		fps: params.fps,
		height: params.height,
		width: params.width,
		outputLocation,
		codec: params.codec,
		imageFormat: params.imageFormat,
		crf: params.crf,
		pixelFormat: params.pixelFormat,
		proResProfile: params.proResProfile,
		parallelism: 1,
		verbose: false,
		onProgress: () => {
			// TODO: upload progress from time to time
		},
	});
	stitchLabel.end();

	await lambdaWriteFile({
		bucketName: params.bucketName,
		key: `${chunkKey(params.renderId)}${String(params.chunk).padStart(
			8,
			'0'
			// TODO: Dynamic file extension
		)}.mp4`,
		body: fs.createReadStream(outputLocation),
	});
	await uploadMetricsData;
	console.log('Done rendering!', outputDir, outputLocation);
};

export const rendererHandler = async (params: LambdaPayload) => {
	if (params.type !== LambdaRoutines.renderer) {
		throw new Error('Params must be renderer');
	}

	try {
		await renderHandler(params);
	} catch (err) {
		// If this error is encountered, we can just retry as it
		// is a very rare error to occur
		if (
			err.message.includes('FATAL:zygote_communication_linux.cc') &&
			params.retriesLeft > 0
		) {
			const retryPayload: LambdaPayloads[LambdaRoutines.renderer] = {
				...params,
				retriesLeft: params.retriesLeft - 1,
			};
			await lambdaClient.send(
				new InvokeCommand({
					FunctionName: process.env.AWS_LAMBDA_FUNCTION_NAME,
					// @ts-expect-error
					Payload: JSON.stringify(retryPayload),
					InvocationType: 'Event',
				})
			);
		}

		console.log('Error occurred', err);
		await lambdaWriteFile({
			bucketName: params.bucketName,
			key: `${getRendererErrorKeyPrefix(params.renderId)}${
				params.chunk
			}-${Date.now()}.txt`,
			body: JSON.stringify({
				error: err.message,
				stack: err.stack,
			}),
		});
	}
};
