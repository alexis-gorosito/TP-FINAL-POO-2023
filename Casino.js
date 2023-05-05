"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var CartasIguales_1 = require("./CartasIguales");
var Pantalla_1 = require("./Pantalla");
var Ruleta_1 = require("./Ruleta");
var TragamonedasAnimales_1 = require("./TragamonedasAnimales");
var TragamonedasFrutas_1 = require("./TragamonedasFrutas");
var Casino = /** @class */ (function () {
    function Casino(ParamJugador) {
        this.nombre = "Casino";
        this.cartasIguales = new CartasIguales_1.CartasIguales(this.player, "Cartas");
        this.ruleta = new Ruleta_1.Ruleta(this.player);
        this.tragamonedasAnimales = new TragamonedasAnimales_1.TragamonedasAnimales(100, 1);
        this.tragamonedasFrutas = new TragamonedasFrutas_1.TragamonedasFrutas(100, 1);
    }
    Casino.Inscripcion = function (jugador) {
        throw new Error("Ingrese un numero");
    };
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    Casino.prototype.setNombre = function (ParamNombre) {
        this.nombre = ParamNombre;
    };
    Casino.prototype.Inscripcion = function (ParamJugador) {
        var readline = require('readline-sync');
        var pantalla = new Pantalla_1.Pantalla([]);
        pantalla.borrarConsola();
        pantalla.bienvenido(this.nombre);
        var nombreDeInscripcion = readline.question("Ingrese su nombre: ".toUpperCase());
        var coin = readline.question("Ingrese la cantidad de fichas a comprar: ");
        ParamJugador.setCoin(coin);
        ParamJugador.setNombre(nombreDeInscripcion);
        ParamJugador.jugar(pantalla, this);
        pantalla.borrarConsola();
        console.log("\nGracias ".concat(ParamJugador.getNombre(), " por apostar en nuestro Casino \n"));
        console.log("Puede canjear las ".concat(ParamJugador.getCoin(), " fichas que gano\n"));
        console.log("\u00A1 Vuelva pronto !");
    };
    Casino.prototype.crear = function (ParamIndice, ParamPantalla) {
        switch (ParamIndice) {
            case 1:
                this.cartasIguales.jugar(ParamPantalla);
                break;
            case 2:
                this.ruleta.iniciar();
                break;
            case 3:
                this.tragamonedasAnimales.girar();
                break;
            case 4:
                this.tragamonedasFrutas.girar();
                break;
            case 0:
                console.log("Gracias por Elegirnos");
                break;
            default:
                console.log("No forma parte del Casino");
        }
    };
    return Casino;
}());
exports.Casino = Casino;
