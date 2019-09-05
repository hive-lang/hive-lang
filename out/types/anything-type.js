"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builtin_source_context_1 = require("./builtin-source-context");
class AnythingType {
    constructor() {
        this.sourceContext = new builtin_source_context_1.BuiltinSourceContext();
    }
}
exports.AnythingType = AnythingType;
;
exports.ANYTHING_TYPE = new AnythingType();
//# sourceMappingURL=anything-type.js.map