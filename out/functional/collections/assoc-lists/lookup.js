"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lists_1 = require("@/functional/collections/lists");
function lookup(list, key) {
    const entry = lists_1.find(list, entry => entry.key === key);
    if (entry === null) {
        return null;
    }
    return entry.value;
}
exports.lookup = lookup;
//# sourceMappingURL=lookup.js.map