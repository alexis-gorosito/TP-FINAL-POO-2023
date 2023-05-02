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
exports.TragamonedasAnimales = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedasAnimales = /** @class */ (function (_super) {
    __extends(TragamonedasAnimales, _super);
    function TragamonedasAnimales(apuestaMinima, probabilidadDeGanar) {
        var _this = _super.call(this, apuestaMinima, probabilidadDeGanar) || this;
        _this.animales = ["leon", "tigre", "oso", "mono", "jirafa"];
        return _this;
    }
    TragamonedasAnimales.prototype.girar = function () {
        this.resultado = [
            this.animales[Math.floor(Math.random() * this.animales.length)],
            this.animales[Math.floor(Math.random() * this.animales.length)],
            this.animales[Math.floor(Math.random() * this.animales.length)],
        ];
    };
    return TragamonedasAnimales;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasAnimales = TragamonedasAnimales;
