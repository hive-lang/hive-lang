import { ParameterizedType } from "@/types/parameterized-type";
import { AssocList } from "@/functional/collections/assoc-lists";
import { ParameterState } from "./parameter-state";
import { FiniteType } from "@/types/finite-type";
import { Variance } from "./variance";
import { UnifyResult, unifySuccess } from "./unify-result";
import { AnalysisError } from "@/analysis/errors";

export function unify<SourceContext>(
        expected: ParameterizedType<SourceContext>,
        actual: ParameterizedType<SourceContext>,
        variance: Variance,
        parameters: AssocList<string, ParameterState<SourceContext>>):
      UnifyResult<SourceContext> {
  if (expected instanceof FiniteType) {
    return unifyFinite(expected, actual, variance, parameters);
  }
  return new AnalysisError();
}

function unifyFinite<SourceContext>(
        expected: FiniteType<SourceContext>,
        actual: ParameterizedType<SourceContext>,
        variance: Variance,
        parameters: AssocList<string, ParameterState<SourceContext>>):
    UnifyResult<SourceContext> {
  if (actual instanceof FiniteType) {
    if (actual.symbol === expected.symbol) {
      return unifySuccess();
    } else {
      return new AnalysisError();
    }
  }

  return new AnalysisError();
}
