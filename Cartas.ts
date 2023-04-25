export class Cartas {
    private cartas : string;
    public constructor (paramCartas:string){
      this.cartas = paramCartas;
    }
    public getCartas():string{
        return this.cartas
    }
    public setCartas(paramCartas:string):void{
            this.cartas = paramCartas
    }
    public colorCarta(ParamColor:string):Boolean{
        return this.cartas.includes(ParamColor)
    }
}