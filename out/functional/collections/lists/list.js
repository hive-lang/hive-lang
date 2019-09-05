"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function cons(head, tail) {
    return {
        value: head,
        rest: tail,
    };
}
exports.cons = cons;
function car(list) {
    if (list == null) {
        throw new Error();
    }
    return list.value;
}
exports.car = car;
function cdr(list) {
    if (list == null) {
        throw new Error();
    }
    return list.rest;
}
exports.cdr = cdr;
function listFromArray(items) {
    let l = null;
    for (const item of items.reverse()) {
        l = cons(item, l);
    }
    return l;
}
exports.listFromArray = listFromArray;
//# sourceMappingURL=list.js.map