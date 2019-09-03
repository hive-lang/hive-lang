import { expect } from "chai";
import { updateParameterBounds } from './update-parameter-bounds';
import { assocFromObject, AssocList } from "@/functional/collections/assoc-lists";
import { ParameterState } from "./parameter-state";
import { TestingSourceContext } from "@/types/testing/types";
import { Variance } from "./variance";
import { ANYTHING_TYPE } from "../anything-type";
import { ParameterRange } from "./parameter-range";

describe('types/unification/updateParameterBounds', function() {
  it('does nothing when both parameters and updates are null', function() {
    expect(updateParameterBounds(null, null)).equals(null);
  });

  it('does nothing when updates are null', function() {
    const parameters: AssocList<string, ParameterState<TestingSourceContext>> =
        assocFromObject({
          a: typicalParameterState(),
        });
    expect(updateParameterBounds(parameters, null)).deep.equals(parameters);
  });

  it('updates bounds of parameters', function() {
    const parameters: AssocList<string, ParameterState<TestingSourceContext>> =
        assocFromObject({
          a: typicalParameterState(),
          b: typicalParameterState(),
          c: typicalParameterState(),
        });
    const updates: AssocList<string, ParameterRange<TestingSourceContext> =
        assocFromObject({
          a: {general: new Para}
        });
    expect(updateParameterBounds(parameters, null)).deep.equals(parameters);
  });

  function typicalParameterState(): ParameterState<TestingSourceContext> {
    return {
      baseVariance: Variance.Covariant,
      bounds: {
        general: ANYTHING_TYPE,
        specific: null
      }
    };
  }
});
