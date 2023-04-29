
import { log } from "console";
import { Juego } from "./Juego";
import { Jugador } from './Jugador';

export class Ruleta extends Juego {
    private numeros: number[];
    private color: string[];
    private dinero: number;
    private jugador: Jugador;

    constructor(pApuestaMinima:number, pProbabilidadGanar:number) {
      super(pApuestaMinima, pProbabilidadGanar);
      this.dinero = 0;

      this.numeros = [];
      for (let i = 0; i <= 36; i++) {
        this.numeros.push(i);
    }
      this.color = [];
      for (let i = 0; i <= 36; i++) {
        if (i === 0) {
          this.color.push("verde");
      } else if (i >= 1 && i <= 10) {
         if (i % 2 === 0) {
          this.color.push("negro");
        } else {
          this.color.push("rojo");
        }
      } else if (i >= 11 && i <= 18) {
        if (i % 2 === 0) {
          this.color.push("rojo");
        } else {
          this.color.push("negro");
        }
      } else if (i >= 19 && i <= 28) {
        if (i % 2 === 0) {
          this.color.push("negro");
        } else {
          this.color.push("rojo");
        }
      } else if (i >= 29 && i <= 36) {
        if (i % 2 === 0) {
          this.color.push("rojo");
        } else {
          this.color.push("negro");
        }
      }
    }
    }
    public iniciar():any{
      const readline = require('readline-sync');
      this.jugador.getDinero = readline.question('Ingrese su dinero: ')
      console.log(`\nBienvenido al juego de la Ruleta. Su saldo actual es de ${this.dinero} fichas.\n`);
      
      while (this.dinero >= this.apuestaMinima)
        this.jugar();
        if(this.dinero < this.apuestaMinima){
          console.log(`Dinero insufisiente, ingrese de nuevo dinero para poder jugar`);
          console.log(`Su dinero actual es de ${this.jugador.dineroActual} y la apuesta minima es de ${this.apuestaMinima}`);
          return 
        }
      const seguirJugando = readline.question(`Quiere seguir jugando? [S/N] `)
      if(seguirJugando.toLowerCase() === "n"){
        console.log(`Gracias por jugar a la Ruleta, vuelva pronto!`);
        console.log(`Su dinero final es de ${this.dinero}`);
      }
    }
     jugar():void{

  }
    public girar(): [number, string] {
      let valor = Math.floor(Math.random() * this.numeros.length);
      let numero = this.numeros[valor];
      let color = this.color[valor];
      return [numero, color];
  }
  
  }
  const ruleta = new Ruleta(500,1);
  const resultado = ruleta.girar();

console.log(`El numero ganador es el ${resultado[0]} ${resultado[1]}`);

