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
        console.log(`\nSu bonus es de: x${bonus} `);

      const nroApostado = readline.question(`\nIngrese un numero al que desea apostar: `)
        console.clear();
        console.log(`\nGirando...`);
        console.log(`Girando...`);

      const nroGanador = Math.floor(Math.random() * 37)
        if(nroApostado > 36 || nroApostado < 0){
          console.log(`\n¡ERROR!`);
          console.log(`\nDebe ingresar un numero que este entre 0 y 36`);
          this.jugar()
        }
        else if(nroApostado == nroGanador){
          console.log(`\nFelcitaciones, usted a ganado...`);
          console.log(`Numero apostado: ${nroApostado} | | Numero ganador: ${nroGanador}`);
            const dineroGanado:number = ((bonus * this.apuesta) + this.dinero);
            console.log(`Su dinero es: $${dineroGanado} \n `);
        }
        else{
        console.log(`\n¡Que mala suerte, usted a perdido!`);
        console.log(`Numero apostado: ${nroApostado} | | Numero ganador: ${nroGanador}`);
          const dineroPerdido = (this.dinero - this.apuesta);
            console.log(`Su dinero es: $${dineroPerdido} \n `);
            this.retirarse();
      }

    }
    public retirarse():void{
      const readline = require('readline-sync');
        const seguirJugando = readline.question(`\nQuiere seguir jugando? [S/N] `)
         console.clear()
        if(seguirJugando.toLowerCase() === "n"){
        console.log(`\nGracias por jugar a la Ruleta, vuelva pronto!`);
        console.log(`\nSu dinero final es de ${this.dinero}`);
      }else{
        this.jugar();
      }
}
    public iniciar():void{
      const readline = require('readline-sync');

      console.log(` \n ¡Bienvenido al juego de la Ruleta! \n `);
      console.log(`Su dinero es: $${this.dinero}  `);

      this.apuesta = readline.question(`\nIngrese su apuesta: $`);
      console.clear()

      if (this.dinero >= this.apuesta){
        this.jugar();
      }else{
        (this.dinero < this.apuesta);
        console.log(`\nDinero es insufisiente, ingrese mas dinero para poder jugar`);
        }    
       }
    }
  
  



