import { CartasIguales } from "./CartasIguales";
import { Jugador } from './Jugador';
import { Pantalla } from "./Pantalla";
import { Ruleta } from "./Ruleta";
import { TragamonedasAnimales} from "./TragamonedasAnimales";
import { TragamonedasFrutas } from "./TragamonedasFrutas";

export class Casino{
    static Inscripcion(jugador: typeof Jugador) {
        throw new Error("Method not implemented.");
    }
    private nombre:string;
    private tragamonedasAnimales:TragamonedasAnimales;
    private tragamonedasFrutas: TragamonedasFrutas;
    private ruleta: Ruleta;
    private cartasIguales: CartasIguales;
    private player: Jugador;
  

    public constructor(ParamJugador:Jugador){
        this.nombre = "Casino";
        this.tragamonedasAnimales = new TragamonedasAnimales(500,1); 
        this.tragamonedasFrutas = new TragamonedasFrutas(500,1); 
        this.cartasIguales = new CartasIguales(this.player, "a"); 
        this.ruleta = new Ruleta(this.player); 
        
    }

    public getNombre():string {
        return this.nombre
    }
    public setNombre(ParamNombre:string):void{
        this.nombre=ParamNombre;
    }

    public Inscripcion(ParamJugador:Jugador):void {
        const readline = require('readline-sync')
        let pantalla = new Pantalla([]);
        pantalla.borrarConsola();
        pantalla.bienvenido(this.nombre);
        const nombreDeInscripcion = readline.question("Ingrese su nombre: ".toUpperCase());
        const coin = readline.question("Ingrese la cantidad de fichas a comprar: ");
        ParamJugador.setCoin(coin);
        ParamJugador.setNombre(nombreDeInscripcion);
        ParamJugador.jugar(pantalla,this);
        pantalla.borrarConsola();
        console.log(`Gracias ${ParamJugador.getNombre()} por apostar en ${this.nombre}`);
        console.log(`Puede canjear las ${ParamJugador.getCoin()} fichas que gano`);
        console.log("Vuelva pronto");    
    }

    public crear(ParamIndice:number, ParamPantalla:Pantalla):void{
        switch (ParamIndice) {
        case 1: 
            this.tragamonedasAnimales.girar();       
            break;
        case 2:
            this.tragamonedasFrutas.girar(); 
            break;
        case 3:
            this.cartasIguales.jugar(ParamPantalla); 
            break;
        case 4:
            this.ruleta.iniciar();
            break;
        case 0:
            console.log("Gracias por Elegirnos");
            break;
        default:
            console.log("No forma parte del Casino");
        }
        

    }
}