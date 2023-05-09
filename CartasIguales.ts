import { Cartas } from './Cartas';
import { Mazo } from './Mazo';
import { Jugador } from './Jugador';
​
export class CartasIguales {
    private carta1:Cartas;
    private carta2:Cartas;
    private jugador:Jugador;
    private mazo:Mazo;
    private apuesta:number;
    private Coin: number;
    public readline = require('readline-sync')
​
​
    public constructor(ParamJugador:Jugador){
        this.mazo = new Mazo();
        this.carta1 = new Cartas('Carta 1');
        this.carta2 = new Cartas('Carta 2');
        this.jugador = ParamJugador;
        this.Coin = this.Coin;
        this.apuesta = this.apuesta;       
    }
​
    
 
    public getCarta1():Cartas{    
        return this.carta1;
    }
    public setCarta1(ParamCarta1:Cartas){
        this.carta1 = ParamCarta1;
    }
    public getCarta2():Cartas{
        return this.carta2;
    }    
    public setCarta2(ParamCarta2:Cartas){
        this.carta2 = ParamCarta2;
    }
​
   
​
    public jugar():void{
​
        const readline = require('readline-sync');
​
        let cantidadCartasMazo = 108-this.mazo.getDescarte().length;
        let verificar:boolean = false;
            if(parseInt(this.carta1.getCartas().replace(/\D/g, "")) === parseInt(this.carta2.getCartas().replace(/\D/g, ""))){ 
                verificar = true   
            
            } else {
                verificar = false;
            }
​
        let Apuesta = this.apuesta;
        let fichas = this.Coin;
        console.clear()
        
        if ((Apuesta > 0) && (verificar === true)){ 
            let Premio = 10 * Apuesta;            
            console.log(`\n Felcitaciones, a ganado ${Premio + fichas} `);           
            } else {                                                                                        
             let Perdio = fichas - Apuesta;
             console.log(`\n ¡Que mala suerte, a perdido!`);
             console.log(`  Su dinero es: ${Perdio} \n `);
​
             this.SeguirJugando();             
                }        
  
    }
​
​
    public SeguirJugando():void{
        const readline = require('readline-sync');
          let seguirJugando = readline.question(`\n ¿Quiere seguir jugando? [S/N] `)
           console.clear()
          if(seguirJugando.toLowerCase() === "n"){
          console.log(`\n Gracias por jugar a Cartas Iguales, vuelva pronto!`);
        } else {
          this.jugar();
        }
  }
      
  
    public iniciar():void{
        let readline = require('readline-sync');
        console.log(` \n Bienvenido a Cartas Iguales \n `); 
        this.Coin = this.readline.question(`¿Cuantas fichas desea comprar? `);     
        this.apuesta = this.readline.question(` \n ¿cuanto desea Apostar: $`);
        console.clear()
          
        if (this.Coin >= this.apuesta){
          this.jugar();  
        }else{
             console.log(`\n Ingrese mas fichas para poder jugar`);
          }
   }
}