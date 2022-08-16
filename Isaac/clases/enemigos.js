class Enemigos {
    constructor(){
        this.imagen = document.createElement("img")
        this.vida = 3
        this.dano = 1
        this.velocidad = 10
        this.posicionx = 0
        this.posiciony = 0
    }
    /**
     * @description le asgina propiedades a style del propiedad llamada imagen y lo coloca 
     *              en una posicion random
     */
    crearEnemigo(){
        let posicionx = Math.floor(Math.random() *(500) )+ 170 
        let posiciony = Math.floor(Math.random() *(250) )+ 130
        this.posicionx = posicionx
        this.posiciony = posiciony
        let random = Math.floor(Math.random() * 2)+1
        this.imagen.src = "/src/img/enemigo" + random +".png"
        this.imagen.style.top = this.posiciony+ "px"
        this.imagen.style.left = this.posicionx+ "px"
        this.imagen.style.position = "fixed"
        this.imagen.style.display = "inline"
        this.imagen.style.position = "absolute"
        document.body.appendChild(this.imagen)
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
        if(this.posiciony >400)
        {
            this.posiciony = 400
            return false
        }else
        if(this.posicionx < xDerecha + 10)
        {
            this.posicionx = xDerecha + 10
            return false
        }else
        if(this.posicionx > 700 - 10)
        {
            this.posicionx = 700 - 100
            return false
        }
        return true
    }
    /**
     * @description con ayuda de un math random se le asignan valores a las propiedades del
     *              objeto como que camine mas rapido, quite mas vida etc
     */
    tiposDeEnemigos(){
        let bool = Math.floor(Math.random()*8)
        if(bool == 1){
            this.velocidad = 20
        }else if(bool == 2){
            this.velocidad = 8
            this.dano = 3
        }else if(bool == 3){
            this.velocidad = 25
            this.dano = 10
        }
    }

    
   
    
}