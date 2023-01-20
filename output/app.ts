let message: string = "hello world";
console.log(message);

function DecoradorPersona(data:string){
    return function <T extends { new(...args: any[]) : {} }>(constructor: T) {
        return class extends constructor {
            array= data.split(",");
            Nombre=this.array[0];
            Apellido=this.array[1];
        }
    }
}

class Operacion{
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    constructor() {
        this.valorA=0
        this.valorB=0
        this.resultado=0
    }
    set ValorA(value:number){
        this.valorA=value;
    }
    set ValorB(value:number){
        this.valorB=value
    }
    get Resultado():number{
return this.resultado;
    }
}
class Suma extends Operacion {
    Sumar()
    { this.resultado=this.valorA+this.valorB }
}
class Restar extends Operacion{
    Restar() 
    { this.resultado=this.valorA-this.valorB }
}
let opoeracionS= new Suma()
opoeracionS.ValorA=45
opoeracionS.ValorB=10
opoeracionS.Sumar()
console.log("El resulatdo de la suma es" + opoeracionS.Resultado)

let operacionR= new Restar()
operacionR.ValorA=45
operacionR.ValorB=10
operacionR.Restar()
console.log("El resultado de la resta es" + operacionR.Resultado)
