import { BoundUpdates } from './bound-updates';
import { AnalysisError } from '@/analysis/errors';
export declare type UnifyResult<SourceContext> = BoundUpdates<SourceContext> | AnalysisError;
export declare function unifySuccess<SourceContext>(): BoundUpdates<SourceContext>;
