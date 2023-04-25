"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(paramNombre, paramEdad, paramCoin) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.coin = paramCoin;
        this.apuesta = 0;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Jugador.prototype.getEdad = function () {
        return this.edad;
    };
    Jugador.prototype.setEdad = function (paramEdad) {
        this.edad = paramEdad;
    };
    Jugador.prototype.getCoin = function () {
        return this.coin;
    };
    Jugador.prototype.setCoin = function (paramCoin) {
        this.coin = paramCoin;
    };
    Jugador.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Jugador.prototype.setApuesta = function (paramApuesta) {
        this.apuesta = paramApuesta;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
