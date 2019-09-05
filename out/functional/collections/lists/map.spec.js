"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const map_1 = require("./map");
const list_1 = require("./list");
describe('function/collections/lists/map', function () {
    it('maps null to null', function () {
        chai_1.expect(map_1.map(null, (x) => x + x))
            .equals(null);
    });
    it('maps list', function () {
        chai_1.expect(map_1.map(list_1.listFromArray([1, 2, 3]), (x) => x + x))
            .deep.equals(list_1.listFromArray([2, 4, 6]));
    });
});
//# sourceMappingURL=map.spec.js.map