class Persona{
    constructor(){
        this.imagen = document.createElement('img');
        this.piso = 0
        this.Posicion = []
        

        
    }
    definriPiso(){
        for(let i=0;i<6;i++){
            this.Posicion[i] = new Array()
        }
        this.Posicion[0][0] = 60 
        this.Posicion[0][1] = 120
        
        this.Posicion[1][0]= 220 
        this.Posicion[2][0]= 390 
        this.Posicion[3][0]= 550

        this.Posicion[4][0]= 40 
    }
    mathPorscionY(){
        return Math.floor(Math.random()*4)
    }
    aparecerPersonas(){
        this.piso = this.mathPorscionY()
        this.imagen.src = "src/img/persona1.png"
        this.imagen.style.position = "fixed";
        this.imagen.style.width = "80px"
        this.imagen.style.height = "130px"
        this.imagen.style.left = "100px"
        this.imagen.style.top = this.Posicion[this.piso][0] +"px"
        this.imagen.style.aspectRatio = "23px"
        
    }
    aparecerMonos(){
        document.body.appendChild(this.imagen);
    }
    moverPersonas(resto = 0,limite){
        let left = 100 + resto
        
        let inrvalMover = setInterval(() => {
            left+=1
                if(left >= limite){
                    clearInterval(inrvalMover)
                }
                
                this.imagen.style.left = left +"px"
                
        }, 10);
    }
    
}