class Objeto {
    constructor(){
        
        this.imagen = document.createElement("img");
        this.posicionX = 0
        
        this.estado = false
        this.eliminar = false 
        this.tiposBonus = ""
        this.bonuss
        this.bonusExtra
    }
    /**
     * @description le asgina propiedades a style del propiedad llamada imagen y lo coloca 
     *              en una posicion random
     */
    crear(){
        this.posicionX = Math.floor(Math.random() *(500) )+ 170 
        this.posiciony = Math.floor(Math.random() *(250) )+ 130
        this.imagen.style.top = this.posiciony + "px"
        this.imagen.style.left = this.posicionX + "px"
        let item = Math.floor(Math.random() *(10) )+ 1
        
        this.posicionX = 0
        this.imagen.src = "src/img/item ("+item +").jpeg"
        this.imagen.style.display = "inline"
        this.imagen.style.width = "4%"
        this.imagen.style.height = "6%"
        this.imagen.style.position = "fixed"
        document.body.appendChild(this.imagen)
    }
    /**
     * @param {bool} bool
     * @description si es cierto ejecula una de las dos opearciones que nos da un numero aleatorio
     */
    math(bool){
        return bool == true? Math.floor(Math.random()*50)+1:Math.floor(Math.random()*10)+1
    }
    /**
     * @description determina si un objeto es una mejora o una desventaja para el jugador
     *              luego le da valores a la propiedad del objeto
     */
    bonus(){
        
        let variableAux = Math.floor(Math.random()*4)+1
        let buffONerf = Math.floor(Math.random()*3)
        
        if(buffONerf == 1){
            if(variableAux== 1) //velocidad
                this.tiposBonus = "velocidad"
                
                this.bonuss = this.math(true);
            if(variableAux== 2) //vida
                this.tiposBonus = "vida"
                this.bonuss = this.math(false);
            if(variableAux== 3){
                this.tiposBonus = "vidayvelocidad"
                this.bonuss = this.math(false);
                this.bonusExtra = this.math(true)
            }
        }else{
            if(variableAux== 1) //velocidad
                this.tiposBonus = "velocidad"
                this.bonuss = this.math(true);
            if(variableAux== 2) //vida
                this.tiposBonus = "vida"
                this.bonuss -= this.math(false);
            if(variableAux== 3){
                this.tiposBonus = "vidayvelocidad"
                this.bonuss -= this.math(false);
                this.bonusExtra -= this.math(true)
            }
        }
        
        
    }
    /**
     * 
     * @param {objeto} personaje1 
     * @returns 
     * @description verifica si el limite del objeto ha chocado con otro si la condicion se
     *              si la condicion se cumple aplica los respectivos bonus al jugador
     */
    recorrido(personaje1) {
            if (this.imagen.offsetTop + this.imagen.height  > personaje1.imagen.offsetTop && 
                this.imagen.offsetTop < personaje1.imagen.offsetTop + personaje1.imagen.height && 
                this.imagen.offsetLeft + this.imagen.width  > personaje1.imagen.offsetLeft && 
                this.imagen.offsetLeft < personaje1.imagen.offsetLeft + personaje1.imagen.width
                ) {
                    if(this.tiposBonus == "velocidad"){
                        if(personaje1.velocidad >10){
                            personaje1.velocidad += this.bonuss
                        }
                        
                    }else if(this.tiposBonus == "vida"){
                        if(personaje1.vida >50){
                            personaje1.vida += this.bonuss
                        }
                        
                    }else if(this.tiposBonus == "vidayvelocidad"){
                        if(personaje1.vida >50 && personaje1.velocidad >10){
                            personaje1.vida += this.bonuss
                            personaje1.velocidad += this.bonusExtra
                        }
                        
                    }
                    document.body.removeChild(this.imagen);
                    return
            }
        
        
    }
    
}