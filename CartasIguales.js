"use strict";
exports.__esModule = true;
exports.CartasIguales = void 0;
var Cartas_1 = require("./Cartas");
var Mazo_1 = require("./Mazo");
var CartasIguales = /** @class */ (function () {
    function CartasIguales(ParamJugador) {
        this.readline = require('readline-sync');
        this.mazo = new Mazo_1.Mazo();
        this.carta1 = new Cartas_1.Cartas('Carta 1');
        this.carta2 = new Cartas_1.Cartas('Carta 2');
        this.jugador = ParamJugador;
        this.Coin = this.Coin;
        this.apuesta = this.apuesta;
    }
    CartasIguales.prototype.getCarta1 = function () {
        return this.carta1;
    };
    CartasIguales.prototype.setCarta1 = function (ParamCarta1) {
        this.carta1 = ParamCarta1;
    };
    CartasIguales.prototype.getCarta2 = function () {
        return this.carta2;
    };
    CartasIguales.prototype.setCarta2 = function (ParamCarta2) {
        this.carta2 = ParamCarta2;
    };
    CartasIguales.prototype.jugar = function () {
        var readline = require('readline-sync');
        var cantidadCartasMazo = 108 - this.mazo.getDescarte().length;
        var verificar = false;
        if (parseInt(this.carta1.getCartas().replace(/\D/g, "")) === parseInt(this.carta2.getCartas().replace(/\D/g, ""))) {
            verificar = true;
        }
        else {
            verificar = false;
        }
        var Apuesta = this.apuesta;
        var fichas = this.Coin;
        console.clear();
        if ((Apuesta > 0) && (verificar === true)) {
            var Premio = 10 * Apuesta;
            console.log("\n Felcitaciones, a ganado ".concat(Premio + fichas, " "));
        }
        else {
            var Perdio = fichas - Apuesta;
            console.log("\n \u00A1Que mala suerte, a perdido!");
            console.log("  Su dinero es: ".concat(Perdio, " \n "));
            this.SeguirJugando();
        }
    };
    CartasIguales.prototype.SeguirJugando = function () {
        var readline = require('readline-sync');
        var seguirJugando = readline.question("\n \u00BFQuiere seguir jugando? [S/N] ");
        console.clear();
        if (seguirJugando.toLowerCase() === "n") {
            console.log("\n Gracias por jugar a Cartas Iguales, vuelva pronto!");
        }
        else {
            this.jugar();
        }
    };
    CartasIguales.prototype.iniciar = function () {
        var readline = require('readline-sync');
        console.log(" \n Bienvenido a Cartas Iguales \n ");
        this.Coin = this.readline.question("\u00BFCuantas fichas desea comprar? ");
        this.apuesta = this.readline.question(" \n \u00BFcuanto desea Apostar: $");
        console.clear();
        if (this.Coin >= this.apuesta) {
            this.jugar();
        }
        else {
            console.log("\n Ingrese mas fichas para poder jugar");
        }
    };
    return CartasIguales;
}());
exports.CartasIguales = CartasIguales;
