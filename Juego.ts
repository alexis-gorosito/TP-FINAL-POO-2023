export abstract class Juego {
    public apuestaMinima:number;
    public probabilidadGanar:number;
    constructor(pApuestaMinima:number, pProbabilidadGanar:number) {
        this.apuestaMinima = pApuestaMinima;
        this.probabilidadGanar = pProbabilidadGanar;
    }
}