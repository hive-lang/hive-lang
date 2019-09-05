"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const update_parameter_bounds_1 = require("./update-parameter-bounds");
const assoc_lists_1 = require("@/functional/collections/assoc-lists");
const testing_1 = require("@/types/testing");
const variance_1 = require("./variance");
const anything_type_1 = require("../anything-type");
describe('types/unification/updateParameterBounds', function () {
    it('does nothing when both parameters and updates are null', function () {
        chai_1.expect(update_parameter_bounds_1.updateParameterBounds(null, null)).equals(null);
    });
    it('does nothing when updates are null', function () {
        const parameters = assoc_lists_1.assocFromObject({
            a: typicalParameterState(),
        });
        chai_1.expect(update_parameter_bounds_1.updateParameterBounds(parameters, null)).deep.equals(parameters);
    });
    it('updates bounds of parameters', function () {
        const parameters = assoc_lists_1.assocFromObject({
            a: typicalParameterState(),
            b: typicalParameterState(),
            c: typicalParameterState(),
        });
        const updates = assoc_lists_1.assocFromObject({
            b: {
                general: testing_1.testObjectType({ a: anything_type_1.ANYTHING_TYPE }),
                specific: testing_1.testObjectType({ a: testing_1.testFiniteType('foo') }),
            },
        });
        const expected = assoc_lists_1.assocFromObject({
            a: typicalParameterState(),
            b: parameterState({
                general: testing_1.testObjectType({ a: anything_type_1.ANYTHING_TYPE }),
                specific: testing_1.testObjectType({ a: testing_1.testFiniteType('foo') }),
            }),
            c: typicalParameterState(),
        });
        chai_1.expect(update_parameter_bounds_1.updateParameterBounds(parameters, updates)).deep.equals(expected);
    });
    function typicalParameterState() {
        return parameterState({
            general: anything_type_1.ANYTHING_TYPE,
            specific: null
        });
    }
    function parameterState(bounds) {
        return {
            baseVariance: variance_1.Variance.Covariant,
            bounds: bounds,
        };
    }
});
//# sourceMappingURL=update-parameter-bounds.spec.js.map