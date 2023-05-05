"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var Ruleta = /** @class */ (function () {
    function Ruleta(pJugador) {
        this.jugador = pJugador;
        this.dinero = 1000;
        this.apuesta = 0;
    }
    Ruleta.prototype.jugar = function () {
        var readline = require('readline-sync');
        var bonus = Math.floor(Math.random() * 6);
        console.log(" \n Su bonus es de: x".concat(bonus, " "));
        var nroApostado = readline.question("\n Que numero desea apostar? ");
        console.clear();
        console.log("\n Girando...");
        console.log(" Girando...");
        var nroGanador = Math.floor(Math.random() * 2);
        console.log("\n El numero ganador es ".concat(nroGanador));
        if (nroApostado == nroGanador) {
            console.log("\n Felcitaciones, usted a ganado...");
            var dineroGanado = ((bonus * this.apuesta) + this.dinero);
            console.log("  Su dinero es: $".concat(dineroGanado, " \n "));
        }
        else {
            console.log("\n \u00A1Que mala suerte, usted a perdido!");
            var dineroPerdido = (this.dinero - this.apuesta);
            console.log("  Su dinero es: $".concat(dineroPerdido, " \n "));
            this.retirarse();
        }
    };
    Ruleta.prototype.retirarse = function () {
        var readline = require('readline-sync');
        var seguirJugando = readline.question("\n Quiere seguir jugando? [S/N] ");
        console.clear();
        if (seguirJugando.toLowerCase() === "n") {
            console.log("\n Gracias por jugar a la Ruleta, vuelva pronto!");
            console.log("\n Su dinero final es de ".concat(this.dinero));
        }
        else {
            this.jugar();
        }
    };
    Ruleta.prototype.iniciar = function () {
        var readline = require('readline-sync');
        console.log(" \n \u00A1Bienvenido al juego de la Ruleta! \n ");
        console.log("  Su dinero es: $".concat(this.dinero, " \n "));
        this.apuesta = readline.question(" \n Ingrese su apuesta: $");
        console.clear();
        if (this.dinero >= this.apuesta) {
            this.jugar();
        }
        else {
            (this.dinero < this.apuesta);
            console.log("\n Dinero es insufisiente, ingrese mas dinero para poder jugar");
        }
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
