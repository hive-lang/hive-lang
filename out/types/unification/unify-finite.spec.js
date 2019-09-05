"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const testing_1 = require("@/types/testing");
const variance_1 = require("./variance");
const unify_result_1 = require("./unify-result");
const errors_1 = require("@/analysis/errors");
const unify_finite_1 = require("./unify-finite");
describe('types/unification/unifyFinite', function () {
    it('accepts subtype of type with same symbol', function () {
        chai_1.expect(unify_finite_1.unifyFinite(testing_1.testFiniteType("foo"), testing_1.testFiniteType("foo"), variance_1.Variance.Covariant, null))
            .deep.equals(unify_result_1.unifySuccess());
    });
    it('rejects subtype of type with different symbol', function () {
        chai_1.expect(unify_finite_1.unifyFinite(testing_1.testFiniteType("foo"), testing_1.testFiniteType("bar"), variance_1.Variance.Covariant, null))
            .instanceOf(errors_1.AnalysisError);
    });
});
//# sourceMappingURL=unify-finite.spec.js.map