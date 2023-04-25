"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.numeros = Array.from(Array(37).keys());
        this.color = ['verde', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo',
            'negro', 'rojo', 'negro', 'rojo', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'negro', 'rojo',
            'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo'];
    }
    Ruleta.prototype.girar = function () {
        var numero = this.numeros[Math.floor(Math.random() * this.numeros.length)];
        var color = this.color[numero];
        return [numero, color];
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
