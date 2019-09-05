"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const find_1 = require("./find");
const list_1 = require("./list");
describe('function/collections/lists/find', function () {
    it('finds nothing in null', function () {
        chai_1.expect(find_1.find(null, (x) => true))
            .equals(null);
    });
    it('finds nothing when predicate is false', function () {
        chai_1.expect(find_1.find(list_1.listFromArray([1, 2, 3]), (x) => false))
            .equals(null);
    });
    it('finds item matching predicate', function () {
        chai_1.expect(find_1.find(list_1.listFromArray([1, 2, 3]), (x) => x > 2))
            .equals(3);
    });
});
//# sourceMappingURL=find.spec.js.map