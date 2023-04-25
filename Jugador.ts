export class Jugador {
    private nombre:string
    private edad:number
    private coin: number;
    private apuesta: number;

    public constructor (paramNombre:string, paramEdad:number, paramCoin:number){
        this.nombre= paramNombre;
        this.edad= paramEdad;
        this.coin= paramCoin;
        this.apuesta= 0;
    }
    public getNombre (): string{
        return this.nombre;
    }
    public setNombre(paramNombre:string): void{
        this.nombre= paramNombre;
    }
    public getEdad (): number{
        return this.edad;
    }
    public setEdad(paramEdad:number): void{
        this.edad= paramEdad;
    }
    public getCoin (): number{
        return this.coin;
    }
    public setCoin(paramCoin:number): void{
        this.coin= paramCoin;
    }
    public getApuesta (): number{
        return this.apuesta;
    }
    public setApuesta(paramApuesta:number): void{
        this.apuesta= paramApuesta;
    }
}