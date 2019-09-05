"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lists_1 = require("@/functional/collections/lists");
function assocCons(key, value, tail) {
    return lists_1.cons({ key, value }, tail);
}
exports.assocCons = assocCons;
function assocFromMap(map) {
    let a = null;
    for (const [key, value] of map.entries()) {
        a = assocCons(key, value, a);
    }
    return a;
}
exports.assocFromMap = assocFromMap;
function assocFromObject(object) {
    let a = null;
    for (const key in object) {
        a = assocCons(key, object[key], a);
    }
    return a;
}
exports.assocFromObject = assocFromObject;
//# sourceMappingURL=assoc-list.js.map