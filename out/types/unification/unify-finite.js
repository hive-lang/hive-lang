"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_type_1 = require("@/types/finite-type");
const unify_result_1 = require("./unify-result");
const errors_1 = require("@/analysis/errors");
function unifyFinite(expected, actual, variance, parameters) {
    if (actual instanceof finite_type_1.FiniteType) {
        if (actual.symbol === expected.symbol) {
            return unify_result_1.unifySuccess();
        }
        else {
            return new errors_1.AnalysisError();
        }
    }
    return new errors_1.AnalysisError();
}
exports.unifyFinite = unifyFinite;
//# sourceMappingURL=unify-finite.js.map