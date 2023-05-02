"use strict";
exports.__esModule = true;
exports.Cartas = void 0;
var Cartas = /** @class */ (function () {
    function Cartas(ParamCartas) {
        this.cartas = ParamCartas;
    }
    Cartas.prototype.setCartas = function (ParamCartas) {
        this.cartas = ParamCartas;
    };
    Cartas.prototype.getCartas = function () {
        return this.cartas;
    };
    Cartas.prototype.Palo = function (ParamPalo) {
        return this.cartas.includes(ParamPalo);
    };
    Cartas.prototype.mostrarCarta = function (ParamCarta) {
        var SolicitarCarta;
        if (ParamCarta === true) {
            SolicitarCarta = "La carta en la mesa es ".concat(this.cartas);
        }
        else {
            SolicitarCarta = "La nueva carta es ".concat(this.cartas);
        }
        return SolicitarCarta;
    };
    return Cartas;
}());
exports.Cartas = Cartas;
