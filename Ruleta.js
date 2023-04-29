"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Ruleta = void 0;
var Juego_1 = require("./Juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(pApuestaMinima, pProbabilidadGanar) {
        var _this = _super.call(this, pApuestaMinima, pProbabilidadGanar) || this;
        _this.dinero = 0;
        _this.numeros = [];
        for (var i = 0; i <= 36; i++) {
            _this.numeros.push(i);
        }
        _this.color = [];
        for (var i = 0; i <= 36; i++) {
            if (i === 0) {
                _this.color.push("verde");
            }
            else if (i >= 1 && i <= 10) {
                if (i % 2 === 0) {
                    _this.color.push("negro");
                }
                else {
                    _this.color.push("rojo");
                }
            }
            else if (i >= 11 && i <= 18) {
                if (i % 2 === 0) {
                    _this.color.push("rojo");
                }
                else {
                    _this.color.push("negro");
                }
            }
            else if (i >= 19 && i <= 28) {
                if (i % 2 === 0) {
                    _this.color.push("negro");
                }
                else {
                    _this.color.push("rojo");
                }
            }
            else if (i >= 29 && i <= 36) {
                if (i % 2 === 0) {
                    _this.color.push("rojo");
                }
                else {
                    _this.color.push("negro");
                }
            }
        }
        return _this;
    }
    Ruleta.prototype.iniciar = function () {
        var readline = require('readline-sync');
        this.jugador.getDinero = readline.question('Ingrese su dinero: ');
        console.log("\nBienvenido al juego de la Ruleta. Su saldo actual es de ".concat(this.dinero, " fichas.\n"));
        while (this.dinero >= this.apuestaMinima)
            this.jugar();
        if (this.dinero < this.apuestaMinima) {
            console.log("Dinero insufisiente, ingrese de nuevo dinero para poder jugar");
            console.log("Su dinero actual es de ".concat(this.jugador.dineroActual, " y la apuesta minima es de ").concat(this.apuestaMinima));
            return;
        }
        var seguirJugando = readline.question("Quiere seguir jugando? [S/N] ");
        if (seguirJugando.toLowerCase() === "n") {
            console.log("Gracias por jugar a la Ruleta, vuelva pronto!");
            console.log("Su dinero final es de ".concat(this.dinero));
        }
    };
    Ruleta.prototype.jugar = function () {
    };
    Ruleta.prototype.girar = function () {
        var valor = Math.floor(Math.random() * this.numeros.length);
        var numero = this.numeros[valor];
        var color = this.color[valor];
        return [numero, color];
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
var ruleta = new Ruleta(500, 1);
var resultado = ruleta.girar();
console.log("El numero ganador es el ".concat(resultado[0], " ").concat(resultado[1]));
