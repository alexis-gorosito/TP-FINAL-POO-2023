import { Jugador } from "./Jugador";
import { Casino } from "./Casino";

let jugador = new Jugador("Alexis", 20000);
let casino = new Casino(jugador);
casino.Inscripcion(jugador);