"use strict";
exports.__esModule = true;
exports.Cartas = void 0;
var Cartas = /** @class */ (function () {
    function Cartas(paramCartas) {
        this.cartas = paramCartas;
    }
    Cartas.prototype.getCartas = function () {
        return this.cartas;
    };
    Cartas.prototype.setCartas = function (paramCartas) {
        this.cartas = paramCartas;
    };
    Cartas.prototype.colorCarta = function (ParamColor) {
        return this.cartas.includes(ParamColor);
    };
    return Cartas;
}());
exports.Cartas = Cartas;
