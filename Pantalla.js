"use strict";
exports.__esModule = true;
exports.Pantalla = void 0;
var readlineSync = require("readline-sync");
var Pantalla = /** @class */ (function () {
    function Pantalla(ParamPantalla) {
        this.pantalla = ParamPantalla;
    }
    Pantalla.prototype.getPantalla = function () {
        return this.pantalla;
    };
    Pantalla.prototype.setPantalla = function (ParamPantalla) {
        this.pantalla = ParamPantalla;
    };
    Pantalla.prototype.bienvenido = function (ParamTitulo) {
        console.log("\n\u00A1 BIENVENIDO A NUESTRO CASINO !\n".toUpperCase());
    };
    Pantalla.prototype.PantallaInicio = function (ParamTitulo) {
        console.log("\n");
        console.log("                  ".concat(ParamTitulo, "\n").toUpperCase());
        console.log("\n");
        console.log("=======================================================");
        console.log("\n");
        console.log("                  BUENA SUERTE       \n");
    };
    Pantalla.prototype.mostrar = function () {
        for (var i = 0; i < this.pantalla.length; i++) {
            console.log("".concat(this.pantalla[i]));
        }
    };
    Pantalla.prototype.menuPantalla = function () {
        var readline = require('readline-sync');
        console.clear();
        console.log("\n");
        console.log("            BIENVENIDO           ");
        console.log("\n");
        console.log("   ESTOS  SON NUESTROS JUEGOS    ");
        console.log("\n");
        console.log("   1 -     Cartas Iguales        ");
        console.log("   2 -     Ruleta                ");
        console.log("   3 -     Tragamonedas Animales ");
        console.log("   4 -     Tragamonedas Frutas   ");
        console.log("\n");
        console.log("   0 -     Salir                 ");
        return readlineSync.questionInt("\n Ingrese una opcion del menu: ".toUpperCase());
    };
    Pantalla.prototype.comparar = function (ParamMaximo, ParamMinimo, situacion, ParamJugador) {
        var condicion = false;
        switch (situacion) {
            case 1:
                var valor = Number(prompt("Ingrese una opcion".toUpperCase()));
                if ((valor < ParamMinimo) && (valor > ParamMaximo)) {
                    console.log("No puede ingresar ".concat(valor, ", no es una opci\u00F3n del ").concat(this.menuPantalla).toUpperCase());
                }
                else {
                    condicion = true;
                }
                break;
            default:
                var valor1 = Number(prompt("Ingrese su apuesta: ".toUpperCase()));
                if (valor1 < ParamMinimo) {
                    console.log("No puede apostar ".concat(valor1, ", no se puede apostar en ").concat("negativo").toUpperCase());
                }
                else {
                    if (valor1 > ParamMaximo) {
                        console.log("No puede apostar ".concat(valor1, ", no puede apostar mas de lo que tiene").toUpperCase());
                    }
                    else {
                        condicion = true;
                        ParamJugador.setApuesta(valor1);
                    }
                }
                break;
        }
        return condicion;
    };
    Pantalla.prototype.borrarConsola = function () {
        console.clear();
    };
    return Pantalla;
}());
exports.Pantalla = Pantalla;
