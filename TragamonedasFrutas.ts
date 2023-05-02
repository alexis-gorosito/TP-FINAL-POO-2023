import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasFrutas extends Tragamonedas {
    private frutas: string[];
    constructor(apuestaMinima:number, probabilidadDeGanar:number) {
      super(apuestaMinima,probabilidadDeGanar);
      this.frutas = ["manzana","naranja","banana","sandia","uva"];
    }
    public girar(): void {
      this.resultado = [
        this.frutas[Math.floor(Math.random()* this.frutas.length)],
        this.frutas[Math.floor(Math.random()* this.frutas.length)],
        this.frutas[Math.floor(Math.random()* this.frutas.length)],
      ];
    }
  }