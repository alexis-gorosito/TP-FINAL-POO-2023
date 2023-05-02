import { Cartas } from './Cartas';
import { Jugador } from './Jugador';
import { Mazo } from './Mazo';
import { Pantalla } from './Pantalla';

export class CartasIguales{
    private titulo:string;
    private carta1:Cartas;
    private carta2:Cartas;
    private jugador:Jugador;
    private mazo:Mazo;
    private mazo2: Mazo;

    public constructor(ParamJugador:Jugador,ParamTitulo:string){
        this.mazo = new Mazo();
        this.mazo2= new Mazo();
        this.titulo = ParamTitulo;
        this.carta1 = new Cartas("Instrucciones");
        this.carta2 = new Cartas("Dorso");
        this.jugador = ParamJugador;
    }

    public getNombre():string{
        return this.titulo;
    }  
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

    private cantidadCartasMazo():number{              
        return 108-this.mazo.getDescarte().length;
    }

   
    private verificar():boolean{                                                                     
        let condicion:boolean = false;
        if(parseInt(this.carta1.getCartas().replace(/\D/g, "")) === parseInt(this.carta2.getCartas().replace(/\D/g, ""))){ 
            condicion = true   
        
        } else {
            condicion=false;
        }
        return condicion;
    }

    private Premio(ParamApuesta:number):number{
        let premio:number=0; 

        if ((ParamApuesta!=0)&&(this.verificar()===true)){ 
            premio = 10 * this.jugador.getApostar();   
            } else {                                                                                        
                this.jugador.getApostar() - this.jugador.getApostar();
                }
            
        
        return premio;
    }


    private entregarPremio(ParamApuesta:number):string[]{                                                      
        let premio:string[] = new Array;
        const valor = this.Premio(ParamApuesta);                                                            
        premio.push(`${`SU APUESTA ES DE: ${this.jugador.getApostar()}\n`}`);
        if(valor!==0){
            premio.push(`Felicitaciones... gano`.toUpperCase());                                            
            premio.push(`Su premio es de ${valor}`);
            this.jugador.setCoin(valor + this.jugador.getCoin());
        } else {
            premio.push(`Usted Perdio`.toUpperCase());                                        
        }
        premio.push(`le quedan ${this.jugador.getCoin()} fichas`);                                  
        return premio;
    }



    public jugar(ParamPantalla:Pantalla):void {                                                                 
        let SolicitarPantalla: string[] = new Array();                                                            
        let valor:number;                                                                                      
        let condicion:boolean = false;                                                                        
        this.mazo.cargarMazo();                                                                                  
        this.carta2 = this.mazo.darCarta();                                                                        
        ParamPantalla.borrarConsola();                                                                                
        ParamPantalla.bienvenido(this.titulo);                                                                         
        do {
            this.carta1 = this.carta2;                                                                        
            this.carta2 = this.mazo.darCarta();                                                                   
            SolicitarPantalla=[];
            SolicitarPantalla.push(`${this.carta1.mostrarCarta(true)} \n`);                                           
            SolicitarPantalla.push(`Su dinero actual es de ${this.jugador.getCoin()}\n`)                                 
            ParamPantalla.setPantalla(SolicitarPantalla);                                                        
            SolicitarPantalla=[];                                                                                 
            ParamPantalla.PantallaInicio(this.titulo);                                                    
            this.jugador.apuesta(ParamPantalla);                                                               
            SolicitarPantalla.push(`${this.carta2.mostrarCarta(false)} \n`);                               
            do {                                                                                              
                valor = Number(prompt(`Ingrese 0 para seleccionar cartas distintas y 1 para cartas iguales: `));
                if(valor!=0){
                    SolicitarPantalla.push.apply(SolicitarPantalla,this.entregarPremio(valor))                    
                    ParamPantalla.setPantalla(SolicitarPantalla);                                                      
                    condicion=true;                                                           
                } else {
                    console.log('Usted perdio');
                } 
            } while (condicion===false);               
            
            ParamPantalla.mostrar();                        
            console.log("\n");        

        } while(this.jugador.getCoin()>0)
}
}


