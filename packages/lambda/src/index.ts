import {deleteFunction} from './api/delete-function';
import {deployFunction} from './api/deploy-function';
import {deployProject} from './api/deploy-project';
import {ensureLambdaBinaries} from './api/ensure-lambda-binaries';
import {getDeployedLambdas} from './api/get-deployed-lambdas';
import {getFunctionInfo} from './api/get-function-info';
import {getFunctionVersion} from './api/get-function-version';
import {getOrCreateBucket} from './api/get-or-create-bucket';
import {getRenderProgress} from './api/get-render-progress';
import {simulatePermissions} from './api/iam-validation/simulate';
import {
	getRolePolicy,
	getUserPolicy,
} from './api/iam-validation/suggested-policy';
import {renderVideoOnLambda} from './api/render-video-on-lambda';
import {AwsRegion} from './pricing/aws-regions';

export {
	deployFunction,
	deployProject,
	ensureLambdaBinaries,
	getDeployedLambdas,
	getUserPolicy,
	getRolePolicy,
	getOrCreateBucket,
	getRenderProgress,
	renderVideoOnLambda,
	simulatePermissions,
	deleteFunction,
	getFunctionInfo,
	getFunctionVersion,
};
export type {AwsRegion};
