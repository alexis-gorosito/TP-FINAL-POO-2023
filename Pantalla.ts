import { red, blue, green, yellow } from "colors";

class Ruleta {
    private numeros: number[];
    private color: string[];
  
    constructor() {
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
  
    public girar(): [number, string] {
      const valor = Math.floor(Math.random() * this.numeros.length);
      const numero = this.numeros[valor];
      const color = this.color[valor];
      return [numero, color];
    }
  }
  
  const ruleta = new Ruleta();
  const resultado = ruleta.girar();

console.log(`El numero ganador es el ${resultado[0]} ${resultado[1]}`);
