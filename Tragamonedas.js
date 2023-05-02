"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(apuestaMinima, probabilidadDeGanar) {
        this.apuestaMinima = apuestaMinima;
        this.probabilidadDeGanar = probabilidadDeGanar;
        this.resultado = [];
    }
    Tragamonedas.prototype.girar = function () {
        //Metodo abstracto que se implementara en las clases hjas
    };
    Tragamonedas.prototype.mostrarResultado = function () {
        console.log("Resultado:", this.resultado);
    };
    Tragamonedas.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    Tragamonedas.prototype.setApuestaMinima = function (apuestaMinima) {
        this.apuestaMinima = apuestaMinima;
    };
    Tragamonedas.prototype.getProbabilidadDeGanar = function () {
        return this.probabilidadDeGanar;
    };
    Tragamonedas.prototype.setProbabilidadDeGanar = function (probabilidadDeGanar) {
        this.probabilidadDeGanar = probabilidadDeGanar;
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
