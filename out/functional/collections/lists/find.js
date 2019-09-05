"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
function find(list, predicate) {
    if (list === null) {
        return null;
    }
    const head = list_1.car(list);
    return predicate(head) ? head : find(list_1.cdr(list), predicate);
}
exports.find = find;
//# sourceMappingURL=find.js.map