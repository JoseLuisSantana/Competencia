class Bala{
    constructor(posicionXP,posicionYP){
        this.imagen = document.createElement("img");
        this.posicionX = posicionXP
        this.posicionY = posicionYP
        this.velocidad = 10
        this.imagen.style.top = (this.posicionY-300) + "px"
        this.imagen.style.left = (this.posicionX -300) + "px"
        this.imagen.src = "src/img/onda de choque.jpg"
        this.imagen.style.display = "inline"
        this.imagen.style.width = "500px"
        this.imagen.style.height = "500px"
        this.imagen.style.position = "fixed"
        document.body.appendChild(this.imagen)
    }
    /**
     * @description remueve la imagen de la bala
     */
    captura(){
        setTimeout(() => {
            document.body.removeChild(this.imagen)
        }, 1000);
        
    }
    
}
