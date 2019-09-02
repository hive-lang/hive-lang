import { BoundUpdates } from './bound-updates';
import { AnalysisError } from '@/analysis/errors';

export type UnifyResult<SourceContext> = BoundUpdates<SourceContext> | AnalysisError;

export function unifySuccess<SourceContext>(): BoundUpdates<SourceContext> {
  return {
    expected: null,
    actual: null,
  }
}
