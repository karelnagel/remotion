import React, {useMemo} from 'react';
import type {RenderJob} from '../../../preview-server/render-queue/job';
import {renderQueueItemSubtitleStyle} from './item-style';

export const RenderQueueOutputName: React.FC<{
	job: RenderJob;
}> = ({job}) => {
	const style = useMemo((): React.CSSProperties => {
		return {
			...renderQueueItemSubtitleStyle,
			textDecoration: job.deletedOutputLocation ? 'line-through' : 'none',
			color: renderQueueItemSubtitleStyle.color,
			cursor: 'inherit',
		};
	}, [job.deletedOutputLocation]);

	return (
		<span
			style={style}
			title={job.deletedOutputLocation ? 'File was deleted' : job.outName}
		>
			{job.outName}
		</span>
	);
};
