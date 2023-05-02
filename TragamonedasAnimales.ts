import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasAnimales extends Tragamonedas {
    private animales: string[];
    constructor(apuestaMinima: number, probabilidadDeGanar:number){
      super(apuestaMinima,probabilidadDeGanar);
      this.animales = ["leon","tigre","oso","mono","jirafa"];
    }
    public girar(): void {
      this.resultado = [
      this.animales[Math.floor(Math.random()* this.animales.length) ],
      this.animales[Math.floor(Math.random()* this.animales.length)],
      this.animales[Math.floor(Math.random()* this.animales.length)],
      ]
  }
}