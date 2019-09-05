"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_source_context_1 = require("./testing-source-context");
const types_1 = require("@/types");
function testFiniteType(symbol) {
    return new types_1.FiniteType(new testing_source_context_1.TestingSourceContext(), symbol);
}
exports.testFiniteType = testFiniteType;
//# sourceMappingURL=test-finite-type.js.map