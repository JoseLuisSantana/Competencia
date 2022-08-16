class Personaje{
    constructor(){
        this.imagen = document.getElementById("personaje")
        this.balas = []
        this.contador = 0
        this.arma = false
        this.vida = 100
        this.velocidad = 20
        this.posicionx = 140
        this.posiciony = 140
        this.direccion = ""
    }
    /**
     * 
     * @param {int} xDerecha 
     * @param {int} xIzquierda 
     * @param {int} yArriba 
     * @param {int} yAbajo 
     * @returns bool
     * @description verifica que el jugador no sobrepase los limites del mapa y si los
     *              si los sobrepasa manda un false 
     */
    moverD(xDerecha,xIzquierda,yArriba,yAbajo){
        if(this.posiciony < yArriba - 40)
        {
            this.posiciony = yArriba - 39
            return false
        }else
        if(this.posiciony >370)
        {
            this.posiciony = 370
            return false
        }else
        if(this.posicionx < xDerecha + 10)
        {
            this.posicionx = xDerecha + 10
            return false
        }else
        if(this.posicionx > 750 - 10)
        {
            this.posicionx = 750 - 10
            return false
        }
        return true
    }
    /**
     * 
     * @param {boolean} bool 
     * @description si parametro es verdadero el jugador se puede mover
     */
    mover(bool){
        if(bool){
            if(this.direccion =="arriba"){
                this.posiciony -= this.velocidad
            }
            else if(this.direccion =="abajo"){
                this.posiciony += this.velocidad
            }
            else if(this.direccion =="izquierda"){
                this.posicionx  -= this.velocidad 
            }else if(this.direccion =="derecha"){
                this.posicionx  += this.velocidad 
            }
            if(this.direccion =="arriba" || this.direccion =="abajo")
                this.imagen.style.top = this.posiciony + "px";
            else if(this.direccion =="izquierda" || this.direccion =="derecha")
                this.imagen.style.left = this.posicionx + "px"
        }
        

        
    }
   
    
}