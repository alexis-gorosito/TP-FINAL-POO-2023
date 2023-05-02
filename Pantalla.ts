import * as readlineSync from 'readline-sync';
import { Jugador } from './Jugador';


export class Pantalla {
    
    private pantalla:string[];

    public constructor(ParamPantalla:string[]) {
        this.pantalla = ParamPantalla;
    }
    public getPantalla():string[]{
        return this.pantalla;
    }
    public setPantalla(ParamPantalla:string[]){
        this.pantalla = ParamPantalla;
    }

    public bienvenido(ParamTitulo:String):void{
        console.log(`BIENVENIDO A ${ParamTitulo}\n`.toUpperCase());             
    }
    
    public PantallaInicio(ParamTitulo:String){
        console.log("\n");
        
        console.log(`                  ${ParamTitulo}\n`.toUpperCase());
        console.log("\n");
        console.log("=======================================================");
        console.log("\n");
        console.log("                  BUENA SUERTE       \n"); 
              
    }

    public mostrar():void{
        for(let i:number=0;i<this.pantalla.length;i++){
            console.log(`${this.pantalla[i]}`);
        }
    }

   
    public menuPantalla():number{
       
        let menu= "Menu \N";
         console.clear();        
         console.log("\n");         
         console.log(`            BIENVENIDO           `);
         console.log(`                                 `);
         console.log(`   ESTOS  SON NUESTROS JUEGOS    `);
         console.log(`                                 `);
         console.log("                                 ");        
        menu+= console.log("   1 -     Cartas Iguales        ");
        menu+= console.log("   2 -          Ruleta           ");
        menu+= console.log("   3 -  Tragamonedas Animales    ");
        menu+= console.log("   4 -     Tragamonedas Frutas   ");
        console.log("\n");        
        menu+= console.log("   5 -        Salir              ");  
        
        let opcion = 0;
        const readline = require('readline-sync')
        do{
        opcion = readline.question(`Seleccione un juego: `);
        
        switch(opcion){
                case 1:document.write('1 - Cartas Iguales \n');
                break;
                case 2:document.write('2 - Ruleta \n');
                break;
                case 3:document.write('3 - Tragamonedas Animales \n');
                break;
                case 4:document.write('4 - Tragamonedas B \n');
                break;
                case 5:document.write('5 - Salir \n');
                break;
                default:document.write('Selecciones una de las opciones');
                break;
            }
             } while (opcion!= 5);
    
             return opcion
    }


    public comparar(ParamMaximo:number, ParamMinimo:number, situacion:number, ParamJugador:Jugador):boolean{
        let condicion:boolean = false;
        
        switch(situacion) {
            case 1:
                const valor = Number(prompt(`Ingrese una opcion`.toUpperCase()));
                if ((valor < ParamMinimo)&& (valor > ParamMaximo)){
                    console.log(`No puede ingresar ${valor}, no es una opción del ${this.menuPantalla}`.toUpperCase()); 
                } else {
                    condicion = true;
                }
                break;
            default:
                const valor1 = Number(prompt("Ingrese su apuesta: ".toUpperCase()));
                if (valor1<ParamMinimo){
                    console.log(`No puede apostar ${valor1}, no se puede apostar en ${`negativo`}`.toUpperCase()); 
                } else { 
                    if (valor1>ParamMaximo){
                        console.log(`No puede apostar ${valor1}, no puede apostar mas de lo que tiene`.toUpperCase()); 
                    } else {
                        condicion = true;
                        ParamJugador.setApuesta(valor1);
                    }
                } 
                break;
        }      
        return condicion; 
        
    }

    public borrarConsola():void{
        console.clear();
    }
 
}
