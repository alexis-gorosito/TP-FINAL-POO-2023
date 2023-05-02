import { publicDecrypt } from 'crypto';
import { Jugador } from './Jugador';


export class Ruleta  {
    private dinero: number;
    private apuesta:number;
    private jugador: Jugador;


    constructor(pJugador:Jugador,) {
      
      this.jugador = pJugador;
      this.dinero = 1000;
      this.apuesta = 0;
    }
    
    public jugar():void{
      const readline = require('readline-sync')

      const bonus = Math.floor(Math.random() * 6)
        console.log(` \n Su bonus es de: x${bonus} `);

      const nroApostado = readline.question(`\n Que numero desea apostar? `)
        console.clear()
        console.log("\n Girando...");
        console.log(" Girando...");


      const nroGanador = Math.floor(Math.random() * 37)
        console.log(`\n El numero ganador es ${nroGanador}`);
      if(nroApostado == nroGanador){
        console.log(`\n Felcitaciones, usted a ganado...`);
        const dineroGanado:number = ((this.dinero + this.apuesta) * bonus);
          console.log(`  Su dinero es: $${dineroGanado} \n `);
        
      }
      else{
        console.log(`\n ¡Que mala suerte, usted a perdido!`);
          const dineroPerdido = (this.dinero - this.apuesta);
            console.log(`  Su dinero es: $${dineroPerdido} \n `);
            this.retirarse();
      }

    }
    public retirarse():void{
      const readline = require('readline-sync');
        const seguirJugando = readline.question(`\n Quiere seguir jugando? [S/N] `)
         console.clear()
        if(seguirJugando.toLowerCase() === "n"){
        console.log(`\n Gracias por jugar a la Ruleta, vuelva pronto!`);
        console.log(`\n Su dinero final es de ${this.dinero}`);
      }else{
        this.jugar();
      }
}
    public iniciar():void{
      const readline = require('readline-sync');
      
      console.log(` \n ¡Bienvenido al juego de la Ruleta! \n `);
      console.log(`  Su dinero es: $${this.dinero} \n `);
      this.apuesta = readline.question(` \n Ingrese su apuesta: $`);
      console.clear()

      if (this.dinero >= this.apuesta){
        this.jugar();

      }else{
        (this.dinero < this.apuesta);
        console.log(`\n Dinero es insufisiente, ingrese mas dinero para poder jugar`);
        }    
       }
    }
  
  

let player = new Jugador("alexis",20000)
let ruleta1 = new Ruleta (player)
ruleta1.iniciar();


