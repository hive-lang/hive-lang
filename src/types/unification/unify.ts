import { ParameterizedType } from "@/types/parameterized-type";
import { AssocList } from "@/functional/collections/assoc-lists/assoc-list";
import { ParameterState } from "./parameter-state";
import { UnifyResult, unifySuccess } from "./unify-result";
import { TypeCase } from "@/types/type-case";
import { FiniteType } from "@/types/finite-type";
import { Variance } from "./variance";

export function unify<SourceContext>(
        expected: ParameterizedType<SourceContext>,
        actual: ParameterizedType<SourceContext>,
        variance: Variance,
        parameters: AssocList<string, ParameterState<SourceContext>>):
    UnifyResult<SourceContext> {
  if (expected.case === TypeCase.Finite) {
    return unifyFinite(expected, actual, variance, parameters);
  }
  throw "error";
}

export function unifyFinite<SourceContext>(
        expected: FiniteType<SourceContext>,
        actual: ParameterizedType<SourceContext>,
        variance: Variance,
        parameters: AssocList<string, ParameterState<SourceContext>>):
    UnifyResult<SourceContext> {
  if (actual.case === TypeCase.Finite) {
    if (actual.symbol === expected.symbol) {
      return unifySuccess();
    }
  }
}
