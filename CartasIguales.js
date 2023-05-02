"use strict";
exports.__esModule = true;
exports.CartasIguales = void 0;
var Cartas_1 = require("./Cartas");
var Mazo_1 = require("./Mazo");
var CartasIguales = /** @class */ (function () {
    function CartasIguales(ParamJugador, ParamTitulo) {
        this.mazo = new Mazo_1.Mazo();
        this.mazo2 = new Mazo_1.Mazo();
        this.titulo = ParamTitulo;
        this.carta1 = new Cartas_1.Cartas("Instrucciones");
        this.carta2 = new Cartas_1.Cartas("Dorso");
        this.jugador = ParamJugador;
    }
    CartasIguales.prototype.getNombre = function () {
        return this.titulo;
    };
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
    CartasIguales.prototype.cantidadCartasMazo = function () {
        return 108 - this.mazo.getDescarte().length;
    };
    CartasIguales.prototype.verificar = function () {
        var condicion = false;
        if (parseInt(this.carta1.getCartas().replace(/\D/g, "")) === parseInt(this.carta2.getCartas().replace(/\D/g, ""))) {
            condicion = true;
        }
        else {
            condicion = false;
        }
        return condicion;
    };
    CartasIguales.prototype.Premio = function (ParamApuesta) {
        var premio = 0;
        if ((ParamApuesta != 0) && (this.verificar() === true)) {
            premio = 10 * this.jugador.getApostar();
        }
        else {
            this.jugador.getApostar() - this.jugador.getApostar();
        }
        return premio;
    };
    CartasIguales.prototype.entregarPremio = function (ParamApuesta) {
        var premio = new Array;
        var valor = this.Premio(ParamApuesta);
        premio.push("".concat("SU APUESTA ES DE: ".concat(this.jugador.getApostar(), "\n")));
        if (valor !== 0) {
            premio.push("Felicitaciones... gano".toUpperCase());
            premio.push("Su premio es de ".concat(valor));
            this.jugador.setCoin(valor + this.jugador.getCoin());
        }
        else {
            premio.push("Usted Perdio".toUpperCase());
        }
        premio.push("le quedan ".concat(this.jugador.getCoin(), " fichas"));
        return premio;
    };
    CartasIguales.prototype.jugar = function (ParamPantalla) {
        var SolicitarPantalla = new Array();
        var valor;
        var condicion = false;
        this.mazo.cargarMazo();
        this.carta2 = this.mazo.darCarta();
        ParamPantalla.borrarConsola();
        ParamPantalla.bienvenido(this.titulo);
        do {
            this.carta1 = this.carta2;
            this.carta2 = this.mazo.darCarta();
            SolicitarPantalla = [];
            SolicitarPantalla.push("".concat(this.carta1.mostrarCarta(true), " \n"));
            SolicitarPantalla.push("Su dinero actual es de ".concat(this.jugador.getCoin(), "\n"));
            ParamPantalla.setPantalla(SolicitarPantalla);
            SolicitarPantalla = [];
            ParamPantalla.PantallaInicio(this.titulo);
            this.jugador.apuesta(ParamPantalla);
            SolicitarPantalla.push("".concat(this.carta2.mostrarCarta(false), " \n"));
            do {
                valor = Number(prompt("Ingrese 0 para seleccionar cartas distintas y 1 para cartas iguales: "));
                if (valor != 0) {
                    SolicitarPantalla.push.apply(SolicitarPantalla, this.entregarPremio(valor));
                    ParamPantalla.setPantalla(SolicitarPantalla);
                    condicion = true;
                }
                else {
                    console.log('Usted perdio');
                }
            } while (condicion === false);
            ParamPantalla.mostrar();
            console.log("\n");
        } while (this.jugador.getCoin() > 0);
    };
    return CartasIguales;
}());
exports.CartasIguales = CartasIguales;
