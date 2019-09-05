"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Variance;
(function (Variance) {
    Variance[Variance["Covariant"] = 0] = "Covariant";
    Variance[Variance["Contravariant"] = 1] = "Contravariant";
})(Variance = exports.Variance || (exports.Variance = {}));
function flipVariance(variance) {
    return variance === Variance.Covariant
        ? Variance.Contravariant : Variance.Covariant;
}
exports.flipVariance = flipVariance;
//# sourceMappingURL=variance.js.map