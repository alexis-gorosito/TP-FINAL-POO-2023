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
        console.log("\nSu bonus es de: x".concat(bonus, " "));
        var nroApostado = readline.question("\nIngrese un numero al que desea apostar: ");
        console.clear();
        console.log("\nGirando...");
        console.log("Girando...");
        var nroGanador = Math.floor(Math.random() * 37);
        if (nroApostado > 36 || nroApostado < 0) {
            console.log("\n\u00A1ERROR!");
            console.log("\nDebe ingresar un numero que este entre 0 y 36");
            this.jugar();
        }
        else if (nroApostado == nroGanador) {
            console.log("\nFelcitaciones, usted a ganado...");
            console.log("Numero apostado: ".concat(nroApostado, " | | Numero ganador: ").concat(nroGanador));
            var dineroGanado = ((bonus * this.apuesta) + this.dinero);
            console.log("Su dinero es: $".concat(dineroGanado, " \n "));
        }
        else {
            console.log("\n\u00A1Que mala suerte, usted a perdido!");
            console.log("Numero apostado: ".concat(nroApostado, " | | Numero ganador: ").concat(nroGanador));
            var dineroPerdido = (this.dinero - this.apuesta);
            console.log("Su dinero es: $".concat(dineroPerdido, " \n "));
            this.retirarse();
        }
    };
    Ruleta.prototype.retirarse = function () {
        var readline = require('readline-sync');
        var seguirJugando = readline.question("\nQuiere seguir jugando? [S/N] ");
        console.clear();
        if (seguirJugando.toLowerCase() === "n") {
            console.log("\nGracias por jugar a la Ruleta, vuelva pronto!");
            console.log("\nSu dinero final es de ".concat(this.dinero));
        }
        else {
            this.jugar();
        }
    };
    Ruleta.prototype.iniciar = function () {
        var readline = require('readline-sync');
        console.log(" \n \u00A1Bienvenido al juego de la Ruleta! \n ");
        console.log("Su dinero es: $".concat(this.dinero, "  "));
        this.apuesta = readline.question("\nIngrese su apuesta: $");
        console.clear();
        if (this.dinero >= this.apuesta) {
            this.jugar();
        }
        else {
            (this.dinero < this.apuesta);
            console.log("\nDinero es insufisiente, ingrese mas dinero para poder jugar");
        }
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
