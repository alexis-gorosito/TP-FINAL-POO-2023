"use strict";
exports.__esModule = true;
var Jugador_1 = require("./Jugador");
var Casino_1 = require("./Casino");
var jugador = new Jugador_1.Jugador("Alexis", 20000);
var casino = new Casino_1.Casino(jugador);
casino.Inscripcion(jugador);
