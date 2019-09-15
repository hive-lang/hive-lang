import { expect } from "chai";
import { testFiniteType, testParameterReference } from '@/types/testing';
import { Variance } from "./variance";
import { unifySuccess } from "./unify-result";
import { AnalysisError } from "@/analysis/errors";
import { unifyFinite } from "./unify-finite";
import { typicalParameterState, parameterState } from './test-parameter-state'
import { assocFromObject } from "@/functional/collections/assoc-lists";

describe('types/unification/unifyFinite', function() {
  it('accepts subtype of type with same symbol', function() {
    expect(unifyFinite(testFiniteType("foo"), null, testFiniteType("foo"), null, Variance.Covariant))
        .deep.equals(unifySuccess());
  });
  it('rejects subtype of type with different symbol', function() {
    expect(unifyFinite(testFiniteType("foo"), null, testFiniteType("bar"), null, Variance.Covariant))
        .instanceOf(AnalysisError);
  });
  it('throws when unknown parameter referenced', function() {
    expect(() => unifyFinite(testFiniteType('foo'), null, testParameterReference('a'), null, Variance.Covariant))
        .throw();
  });
  it('narrows parameter bounds', function() {
    const parameters = assocFromObject({a: typicalParameterState()});
    const fooType = testFiniteType('foo');
    expect(unifyFinite(fooType, null, testParameterReference('a'), parameters, Variance.Covariant))
        .equal({
          expected: null,
          actual: assocFromObject({
            a: {
              general: fooType,
              specific: null,
            },
          }),
        });
  });
  it('rejects type outside of bounds', function() {
    const fooType = testFiniteType('foo');
    const barType = testFiniteType('bar');
    const parameters =
      assocFromObject({
        a: parameterState({
          general: barType,
          specific: null
        }),
      });
    expect(unifyFinite(fooType, null, testParameterReference('a'), parameters, Variance.Covariant))
        .instanceOf(AnalysisError);
  });
});
