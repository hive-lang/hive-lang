"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
function map(list, fn) {
    if (list === null) {
        return null;
    }
    return list_1.cons(fn(list_1.car(list)), map(list_1.cdr(list), fn));
}
exports.map = map;
//# sourceMappingURL=map.js.map