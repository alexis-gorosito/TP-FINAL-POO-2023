import { Casino } from "./Casino";
import { Pantalla } from "./Pantalla";

export class Jugador {
    setApuesta(valor1: number) {
        throw new Error('Method not implemented.');
    }
    private nombre:String;
    private coin:number;
    private apostar:number;
    

    public constructor(ParamNombre:String, ParamCoin:number){
        this.nombre=ParamNombre;
        this.coin=ParamCoin;
        this.apostar=0;
    }

    public getNombre():String{
        return this.nombre;
    }

    public setNombre(ParamNombre:string):void {
        this.nombre=ParamNombre;
    }

    public getCoin():number{
        return this.coin;
    }

    public setCoin(ParamCoin:number):void{
        this.coin=ParamCoin;
    }

    public getApostar():number{
        return this.apostar;
    } 

    public setApostar(ParamApostar:number):void {
        this.apostar=ParamApostar;
    }    
    
    public apuesta (ParamPantalla:Pantalla):void {

        do {            
        
        } while (ParamPantalla.comparar(this.coin,1,2,this)===false);    

        this.coin= this.coin - this.apostar;                                           
    }

    public RecargarCoin():void{
        const readline = require('readline-sync')
        let saldo:number;
        console.log("\n")
        if (this.coin = 0){
            saldo = readline.question('Ingrese la cantidad de fichas que quiere comprar: ');
            if (saldo >= 0){
                this.coin = this.coin + saldo;
            } else {
                console.log('Ingrese la cantidad de fichas que quiere comprar: ');
            
            }
        } 
        
    }

    public jugar(ParamPantalla:Pantalla, ParamCasino:Casino):void{
        let valor:number;        
        do {
            valor = ParamPantalla.menuPantalla();
            if ((valor>0)&&(valor<5)){
                ParamCasino.crear(valor,ParamPantalla);
            } else {
                if ((valor < 0)||(valor >= 5)) {
                    console.log("Ingrese una de las opciones del menu");
                    console.log("\n");                    
                }
            }
            
        } while(valor != 0);
    }
}