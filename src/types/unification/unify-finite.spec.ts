import { expect } from "chai";
import { testFiniteType, testParameterReference } from '@/types/testing';
import { Variance } from "./variance";
import { unifySuccess } from "./unify-result";
import { AnalysisError } from "@/analysis/errors";
import { unifyFinite } from "./unify-finite";

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
    expect(() => unifyFinite(testFiniteType('foo'), null, testParameterReference('a'), parameters, Variance.Covariant))
        .throw();
  });
});
