"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(ParamNombre, ParamCoin) {
        this.nombre = ParamNombre;
        this.coin = ParamCoin;
        this.apostar = 0;
    }
    Jugador.prototype.setApuesta = function (valor1) {
        throw new Error('Method not implemented.');
    };
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (ParamNombre) {
        this.nombre = ParamNombre;
    };
    Jugador.prototype.getCoin = function () {
        return this.coin;
    };
    Jugador.prototype.setCoin = function (ParamCoin) {
        this.coin = ParamCoin;
    };
    Jugador.prototype.getApostar = function () {
        return this.apostar;
    };
    Jugador.prototype.setApostar = function (ParamApostar) {
        this.apostar = ParamApostar;
    };
    Jugador.prototype.apuesta = function (ParamPantalla) {
        do {
        } while (ParamPantalla.comparar(this.coin, 1, 2, this) === false);
        this.coin = this.coin - this.apostar;
    };
    Jugador.prototype.RecargarCoin = function () {
        var readline = require('readline-sync');
        var saldo;
        console.log("\n");
        if (this.coin = 0) {
            saldo = readline.question('Ingrese la cantidad de fichas que quiere comprar: ');
            if (saldo >= 0) {
                this.coin = this.coin + saldo;
            }
            else {
                console.log('Ingrese la cantidad de fichas que quiere comprar: ');
            }
        }
    };
    Jugador.prototype.jugar = function (ParamPantalla, ParamCasino) {
        var valor;
        do {
            valor = ParamPantalla.menuPantalla();
            if ((valor > 0) && (valor < 5)) {
                ParamCasino.crear(valor, ParamPantalla);
            }
            else {
                if ((valor < 0) || (valor >= 5)) {
                    console.log("Ingrese una de las opciones del menu");
                    console.log("\n");
                }
            }
        } while (valor != 0);
    };
    return Jugador;
}());
exports.Jugador = Jugador;
