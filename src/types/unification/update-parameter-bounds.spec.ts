import { expect } from "chai";
import { updateParameterBounds } from './update-parameter-bounds';
import { assocFromObject, AssocList } from "@/functional/collections/assoc-lists";
import { ParameterState } from "./parameter-state";
import { TestingSourceContext, testObjectType, testFiniteType } from "@/types/testing";
import { ANYTHING_TYPE } from "../anything-type";
import { ParameterRange } from "./parameter-range";
import { typicalParameterState, parameterState } from './test-parameter-state'

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

  it('narrows bounds of parameters', function() {
    const parameters: AssocList<string, ParameterState<TestingSourceContext>> =
        assocFromObject({
          a: typicalParameterState(),
          b: typicalParameterState(),
          c: typicalParameterState(),
        });
    const updates: AssocList<string, ParameterRange<TestingSourceContext>> =
        assocFromObject({
          b: {
            general: testObjectType({a: ANYTHING_TYPE}),
            specific: testObjectType({a: testFiniteType('foo')}),
          },
        });
    const expected =
      assocFromObject({
        a: typicalParameterState(),
        b: parameterState({
          general: testObjectType({a: ANYTHING_TYPE}),
          specific: testObjectType({a: testFiniteType('foo')}),
        }),
        c: typicalParameterState(),
      });
    expect(updateParameterBounds(parameters, updates)).deep.equals(expected);
  });
});
