class Escenario{
    constructor(direccion){
        
        this.limites = []
        this.numeroComun = 130
    }
    ponerLimites(){
        this.limites[0] = this.numeroComun //limite x derecho
        this.limites[1] = window.innerHeight //limite x izquierdo
        this.limites[2] = this.numeroComun //limite y arriba
        this.limites[3] = window.innerWidth-this.numeroComun //limite y abajo

    }
}
