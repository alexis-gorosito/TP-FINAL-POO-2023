"use strict";
exports.__esModule = true;
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.numeros = [];
        for (var i = 0; i <= 10; i++) {
            this.numeros.push(i);
        }
        this.color = [];
        for (var i = 0; i <= 10; i++) {
            if (i === 0) {
                this.color.push("verde");
            }
            else if (i >= 1 && i <= 10) {
                if (i % 2 === 0) {
                    this.color.push("negro");
                }
                else {
                    this.color.push("rojo");
                }
            }
        }
    }
    Ruleta.prototype.girar = function () {
        var valor = Math.floor(Math.random() * this.numeros.length);
        var numero = this.numeros[valor];
        var color = this.color[valor];
        return [numero, color];
    };
    return Ruleta;
}());
var ruleta = new Ruleta();
var resultado = ruleta.girar();
console.log("El numero ganador es el ".concat(resultado[0], " ").concat(resultado[1]));
