import { ParameterizedType } from "@/types/parameterized-type";
import { AssocList } from "@/functional/collections/assoc-lists";
import { ParameterState } from "./parameter-state";
import { FiniteType } from "@/types/finite-type";
import { Variance } from "./variance";
import { UnifyResult, unifySuccess } from "./unify-result";
import { AnalysisError } from "@/analysis/errors";
import { unifyFinite } from "./unify-finite";

export function unify<SourceContext>(
        expected: ParameterizedType<SourceContext>,
        expectedParameters: AssocList<string, ParameterState<SourceContext>>,
        actual: ParameterizedType<SourceContext>,
        actualParameters: AssocList<string, ParameterState<SourceContext>>,
        variance: Variance):
      UnifyResult<SourceContext> {
  if (expected instanceof FiniteType) {
    return unifyFinite(expected, expectedParameters, actual, actualParameters, variance);
  }
  return new AnalysisError();
}
