"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lists_1 = require("@/functional/collections/lists");
const lookup_1 = require("@/functional/collections/assoc-lists/lookup");
function updateParameterBounds(parameters, boundUpdates) {
    return lists_1.map(parameters, ({ key: symbol, value: state }) => {
        const updatedBounds = lookup_1.lookup(boundUpdates, symbol);
        const newBounds = updatedBounds !== null ? updatedBounds : state.bounds;
        return {
            key: symbol,
            value: Object.assign({}, state, { bounds: newBounds })
        };
    });
}
exports.updateParameterBounds = updateParameterBounds;
//# sourceMappingURL=update-parameter-bounds.js.map