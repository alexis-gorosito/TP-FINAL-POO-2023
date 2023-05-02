"use strict";
exports.__esModule = true;
exports.Pantalla = void 0;
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
        console.log("BIENVENIDO A ".concat(ParamTitulo, "\n").toUpperCase());
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
        var menu = "Menu \N";
        console.clear();
        console.log("\n");
        console.log("            BIENVENIDO           ");
        console.log("                                 ");
        console.log("   ESTOS  SON NUESTROS JUEGOS    ");
        console.log("                                 ");
        console.log("                                 ");
        menu += console.log("   1 -     Cartas Iguales        ");
        menu += console.log("   2 -          Ruleta           ");
        menu += console.log("   3 -  Tragamonedas Animales    ");
        menu += console.log("   4 -     Tragamonedas Frutas   ");
        console.log("\n");
        menu += console.log("   5 -        Salir              ");
        var opcion = 0;
        var readline = require('readline-sync');
        do {
            opcion = readline.question("Seleccione un juego: ");
            switch (opcion) {
                case 1:
                    document.write('1 - Cartas Iguales \n');
                    break;
                case 2:
                    document.write('2 - Ruleta \n');
                    break;
                case 3:
                    document.write('3 - Tragamonedas Animales \n');
                    break;
                case 4:
                    document.write('4 - Tragamonedas B \n');
                    break;
                case 5:
                    document.write('5 - Salir \n');
                    break;
                default:
                    document.write('Selecciones una de las opciones');
                    break;
            }
        } while (opcion != 5);
        return opcion;
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
