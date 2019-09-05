"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@/types");
function testObjectType(obj) {
    const map = new Map();
    for (const key in obj) {
        map.set(key, obj[key]);
    }
    return types_1.objectType(map);
}
exports.testObjectType = testObjectType;
//# sourceMappingURL=test-object-type.js.map