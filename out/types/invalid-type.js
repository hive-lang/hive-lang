"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builtin_source_context_1 = require("./builtin-source-context");
class InvalidType {
    constructor() {
        this.sourceContext = new builtin_source_context_1.BuiltinSourceContext();
    }
}
exports.InvalidType = InvalidType;
;
exports.INVALID_TYPE = new InvalidType();
//# sourceMappingURL=invalid-type.js.map