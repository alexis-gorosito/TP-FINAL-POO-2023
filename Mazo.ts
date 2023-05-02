import { Cartas } from "./Cartas";

export class Mazo{
    private mazo : Cartas[]
    private descarte : number[]

   public constructor(){
        this.mazo = [];
        this.descarte = [];
   }

   public cargarMazo():void{
          for (let i:number=0;i<4;i++){
               this.mazo.push.apply(this.mazo,this.cargarPalo(i));
          }
   }

   public cargarPalo(indice:number):Cartas[] {
     let palo:string;
     switch (indice){
          case 0:
              palo = " ♥  ";
              break;
         case 1:
              palo = " ♠  ";
              break;
         case 2:
              palo = " ♦  "
              break;
         case 3: 
              palo = " ♣  "
              break;
         default :
              palo = " "
              break;
     }
     
     let paloDelaCarta : Cartas[] = new Array();
     for (let i:number=0;i<13;i++){
          paloDelaCarta.push(new Cartas(` ${i+1} ${palo}`));
     }
     paloDelaCarta.push(new Cartas(`COMODIN ${palo}`));

     return paloDelaCarta;

   }

   public setMazo(ParamMazo:Cartas[]):void{
        this.mazo = ParamMazo;
   }
   public getMazo():Cartas[]{
    return this.mazo
   }
   public getNombreCarta(indice:number):string{
         return this.mazo[indice].getCartas();
   }
   
   public getDescarte():number[]{
    return this.descarte
   }

   public setDescarte(ParamDescarte:number[]):void{
     this.descarte = ParamDescarte;
   }

   public darCarta():Cartas{
          let indice:number;
          let ultimaCarta:number;
          if (this.descarte.length>45){
               ultimaCarta = this.descarte [this.descarte.length-1]
               this.descarte=[];
               this.descarte.push(ultimaCarta);
          } 
          do {
               indice = Math.floor(Math.random()*54);              
          } while (this.descarte.includes(indice)===true);
          this.descarte.push(indice);

          return this.mazo[indice];
   }
   

}