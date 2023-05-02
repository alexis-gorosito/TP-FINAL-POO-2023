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
exports.TragamonedasFrutas = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedasFrutas = /** @class */ (function (_super) {
    __extends(TragamonedasFrutas, _super);
    function TragamonedasFrutas(apuestaMinima, probabilidadDeGanar) {
        var _this = _super.call(this, apuestaMinima, probabilidadDeGanar) || this;
        _this.frutas = ["manzana", "naranja", "banana", "sandia", "uva"];
        return _this;
    }
    TragamonedasFrutas.prototype.girar = function () {
        this.resultado = [
            this.frutas[Math.floor(Math.random() * this.frutas.length)],
            this.frutas[Math.floor(Math.random() * this.frutas.length)],
            this.frutas[Math.floor(Math.random() * this.frutas.length)],
        ];
    };
    return TragamonedasFrutas;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasFrutas = TragamonedasFrutas;
