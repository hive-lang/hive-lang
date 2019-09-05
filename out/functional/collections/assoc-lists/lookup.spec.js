"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const lookup_1 = require("./lookup");
const assoc_list_1 = require("./assoc-list");
describe('function/collections/asssoc-lists/lookup', function () {
    it('finds nothing in null', function () {
        chai_1.expect(lookup_1.lookup(null, 'a')).equals(null);
    });
    it('finds nothing if key missing', function () {
        chai_1.expect(lookup_1.lookup(assoc_list_1.assocFromObject({ a: 1, b: 2, c: 3 }), 'd'))
            .equals(null);
    });
    it('finds value for key', function () {
        chai_1.expect(lookup_1.lookup(assoc_list_1.assocFromObject({ a: 1, b: 2, c: 3 }), 'b'))
            .equals(2);
    });
});
//# sourceMappingURL=lookup.spec.js.map