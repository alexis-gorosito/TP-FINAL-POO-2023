"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(pNombre, pEdad, pDinero) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.dinero = pDinero;
        this.apuesta = 0;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Jugador.prototype.getEdad = function () {
        return this.edad;
    };
    Jugador.prototype.setEdad = function (pEdad) {
        this.edad = pEdad;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.setDinero = function (pDinero) {
        this.dinero = pDinero;
    };
    Jugador.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Jugador.prototype.setApuesta = function (pApuesta) {
        this.apuesta = pApuesta;
    };
    Jugador.prototype.dineroActual = function (ganancias) {
        this.dinero += ganancias;
    };
    Jugador.prototype.perdidaDinero = function (perdidas) {
        this.dinero -= perdidas;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
