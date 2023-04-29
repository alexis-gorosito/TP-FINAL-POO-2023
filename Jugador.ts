export class Jugador {
    private nombre:string
    private edad:number
    public dinero: number;
    private apuesta: number;

    public constructor (pNombre:string, pEdad:number, pDinero:number){
        this.nombre= pNombre;
        this.edad= pEdad;
        this.dinero= pDinero;
        this.apuesta= 0;
    }
    public getNombre (): string{
        return this.nombre;
    }
    public setNombre(pNombre:string): void{
        this.nombre = pNombre;
    }
    public getEdad (): number{
        return this.edad;
    }
    public setEdad(pEdad:number): void{
        this.edad = pEdad;
    }
    public getDinero (): number{
        return this.dinero;
    }
    public setDinero(pDinero:number): void{
        this.dinero = pDinero;
    }
    public getApuesta (): number{
        return this.apuesta;
    }
    public setApuesta(pApuesta:number): void{
        this.apuesta = pApuesta;
    }
    public dineroActual(ganancias:number){
        this.dinero += ganancias;
    }
    public perdidaDinero(perdidas:number){
        this.dinero -= perdidas;
    }
    

}
