import { ParameterState } from "./parameter-state";
import { ANYTHING_TYPE } from "@/types";
import { ParameterRange } from "./parameter-range";
import { Variance } from "./variance";
import { TestingSourceContext } from "@/types/testing";

export function typicalParameterState(): ParameterState<TestingSourceContext> {
  return parameterState({
    general: ANYTHING_TYPE,
    specific: null
  });
}

export function parameterState(bounds: ParameterRange<TestingSourceContext>):
    ParameterState<TestingSourceContext> {
  return {
    baseVariance: Variance.Covariant,
    bounds: bounds,
  };
}
