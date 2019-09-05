import { ParameterizedType } from "@/types/parameterized-type";
import { AssocList } from "@/functional/collections/assoc-lists";
import { ParameterState } from "./parameter-state";
import { FiniteType, TypeParameter } from "@/types";
import { Variance } from "./variance";
import { UnifyResult, unifySuccess } from "./unify-result";
import { AnalysisError } from "@/analysis/errors";
import { lookup } from "@/functional/collections/assoc-lists";

export function unifyFinite<SourceContext>(
    expected: FiniteType<SourceContext>,
    expectedParameters: AssocList<string, ParameterState<SourceContext>>,
    actual: ParameterizedType<SourceContext>,
    actualParameters: AssocList<string, ParameterState<SourceContext>>,
    variance: Variance) {
  if (actual instanceof FiniteType) {
    if (actual.symbol === expected.symbol) {
      return unifySuccess();
    } else {
      return new AnalysisError();
    }
  }

  console.log('got here');
  if (actual instanceof TypeParameter) {
    console.log('and here');
    const parameter = lookup(actualParameters, actual.symbol);
    if (parameter == null) {
      throw 'error';
    }
  }
  return new AnalysisError();
}
