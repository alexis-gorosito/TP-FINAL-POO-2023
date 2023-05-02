export class Cartas{
    private cartas : string;
        
    public constructor (ParamCartas:string){
      this.cartas = ParamCartas;
    }
    
    public setCartas(ParamCartas:string):void{
            this.cartas = ParamCartas
    }
    public getCartas():string{
            return this.cartas
    }

    public Palo(ParamPalo:string):Boolean{
        return this.cartas.includes(ParamPalo)
    }

    public mostrarCarta(ParamCarta:boolean):string {
      let SolicitarCarta:string;  
      if (ParamCarta===true){
        SolicitarCarta = `La carta en la mesa es ${this.cartas}`;
        } else{
          SolicitarCarta = `La nueva carta es ${this.cartas}`;
        }
        return SolicitarCarta;
    }
}

