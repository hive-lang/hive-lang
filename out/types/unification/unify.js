"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_type_1 = require("@/types/finite-type");
const errors_1 = require("@/analysis/errors");
const unify_finite_1 = require("./unify-finite");
function unify(expected, actual, variance, parameters) {
    if (expected instanceof finite_type_1.FiniteType) {
        return unify_finite_1.unifyFinite(expected, actual, variance, parameters);
    }
    return new errors_1.AnalysisError();
}
exports.unify = unify;
//# sourceMappingURL=unify.js.map