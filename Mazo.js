"use strict";
exports.__esModule = true;
exports.Mazo = void 0;
var Cartas_1 = require("./Cartas");
var Mazo = /** @class */ (function () {
    function Mazo() {
        this.mazo = [];
        this.descarte = [];
    }
    Mazo.prototype.cargarMazo = function () {
        for (var i = 0; i < 4; i++) {
            this.mazo.push.apply(this.mazo, this.cargarPalo(i));
        }
    };
    Mazo.prototype.cargarPalo = function (indice) {
        var palo;
        switch (indice) {
            case 0:
                palo = " ♥  ";
                break;
            case 1:
                palo = " ♠  ";
                break;
            case 2:
                palo = " ♦  ";
                break;
            case 3:
                palo = " ♣  ";
                break;
            default:
                palo = " ";
                break;
        }
        var paloDelaCarta = new Array();
        for (var i = 0; i < 13; i++) {
            paloDelaCarta.push(new Cartas_1.Cartas(" ".concat(i + 1, " ").concat(palo)));
        }
        paloDelaCarta.push(new Cartas_1.Cartas("COMODIN ".concat(palo)));
        return paloDelaCarta;
    };
    Mazo.prototype.setMazo = function (ParamMazo) {
        this.mazo = ParamMazo;
    };
    Mazo.prototype.getMazo = function () {
        return this.mazo;
    };
    Mazo.prototype.getNombreCarta = function (indice) {
        return this.mazo[indice].getCartas();
    };
    Mazo.prototype.getDescarte = function () {
        return this.descarte;
    };
    Mazo.prototype.setDescarte = function (ParamDescarte) {
        this.descarte = ParamDescarte;
    };
    Mazo.prototype.darCarta = function () {
        var indice;
        var ultimaCarta;
        if (this.descarte.length > 45) {
            ultimaCarta = this.descarte[this.descarte.length - 1];
            this.descarte = [];
            this.descarte.push(ultimaCarta);
        }
        do {
            indice = Math.floor(Math.random() * 54);
        } while (this.descarte.includes(indice) === true);
        this.descarte.push(indice);
        return this.mazo[indice];
    };
    return Mazo;
}());
exports.Mazo = Mazo;
