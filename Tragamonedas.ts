export class Tragamonedas {
    private apuestaMinima: number;
    private probabilidadDeGanar: number;
    protected resultado: string[];

    constructor(apuestaMinima: number,probabilidadDeGanar:number) {
      this.apuestaMinima = apuestaMinima;
      this.probabilidadDeGanar = probabilidadDeGanar;
      this.resultado = [];
    }
    public girar(): void {
      //Metodo abstracto que se implementara en las clases hjas
    }
    public mostrarResultado(): void {
      console.log("Resultado:",this.resultado);
    }
    public getApuestaMinima():number {
      return this.apuestaMinima;
    }
    public setApuestaMinima(apuestaMinima:number):void {
      this.apuestaMinima = apuestaMinima;
    }
    public getProbabilidadDeGanar(): number {
      return this.probabilidadDeGanar;
    }
    public setProbabilidadDeGanar(probabilidadDeGanar:number): void {
      this.probabilidadDeGanar = probabilidadDeGanar;
    }
    }

