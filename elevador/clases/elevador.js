class Elevador{
    constructor(){
        this.positionY = 50
        this.posicionActual = 0
        this.movimiento = false
        this.posiblesPosiciones = [50,200,360,530,700]
        this.posicionesArreglo = {
            0:{
                1:true
            },
            1:{
                0:true,
                2:true
            },
            2:{
                1:true,
                3:true
            }
            ,
            3:{
                2:true,
                4:true
            },4:{
                3:true
            }
        }
        
        this.imagen = document.createElement('img')
        this.imagen.src = "/src/img/elevador.jpg"
        this.imagen.style.width = "120px"
        this.imagen.style.top = this.positionY + "px"
        this.imagen.style.left = "435px"
        this.imagen.style.position = "absolute"
        document.body.appendChild(this.imagen)
        
    }
    dejarPersonas(numeroPersonas){
        if(this.posicionActual == 4 && this.movimiento == false){
            let x =550
            
            for(let i = 0; i < numeroPersonas; i++){
                let persona = new Persona()
                    persona.definriPiso()
                    persona.aparecerPersonas()
                    persona.aparecerMonos()
                    persona.imagen.style.top ="720px"
                    persona.imagen.style.left = x +(i*20)+ "px"
                    persona.moverPersonas((x +(i*20))-100,800)

                setTimeout(() => {
                    document.body.removeChild(persona.imagen)
                }, 2400);
                
                
            }
            
        }
    }
    
    animacion(n,proxima){
        let posicionProxima = this.posicionActual + proxima
        let velocidad = 2 * n
        let intervaloAnimacionElevador = setInterval(() => {
            
            
            if(posicionProxima < 0) posicionProxima = 0
            if(posicionProxima > 4) posicionProxima = 4
            if(this.positionY < this.posiblesPosiciones[posicionProxima] +5 &&
                this.positionY > this.posiblesPosiciones[posicionProxima] -5
                ){
                this.posicionActual = posicionProxima
                
            }
            if(this.posicionActual == posicionProxima){
                this.movimiento = false
                clearInterval(intervaloAnimacionElevador)
            }
            if(this.posicionesArreglo[this.posicionActual][posicionProxima] === true){
                this.movimiento = true
                this.positionY += velocidad
                this.imagen.style.top = this.positionY + "px"
                
            }
            
            
        }, 10);
    }

}