import { Jugador } from "./Jugador";

export class Ruleta {
    private numeroJugador:number;
    private colorJugador:string;
    private numeros: number[];
    private color: string[];
    private jugador: Jugador;
      
    public constructor() {
        this.numeros = Array.from(Array(37).keys());
        this.color = ['verde', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'negro','rojo', 'negro', 'rojo', 'negro', 'rojo',
         'negro', 'rojo', 'negro', 'rojo', 'rojo','negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'negro','rojo', 
         'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo'];
        }
      
    public girar(): [number, string] {
        const numero = this.numeros[Math.floor(Math.random() * this.numeros.length)];
        const color = this.color[numero];
        return [numero, color];
        }


}