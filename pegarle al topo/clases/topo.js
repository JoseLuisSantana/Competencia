class Topo{
    constructor(){
        this.posiciones = []
        this.imagenTopo = document.createElement('img')
        
    }
    llenado(){
        for(let i = 0; i < 7; i++){
            this.posiciones[i] = new Array()
        }
        
        this.posiciones[0][0] = 150
        this.posiciones[0][1] = 69
        
        this.posiciones[1][0] = 150
        this.posiciones[1][1] = 40
        
        this.posiciones[2][0] = 150
        this. posiciones[2][1] = 10
        
        this.posiciones[3][0] = 350
        this.posiciones[3][1] = 69
        
        this.posiciones[4][0] = 350
        this.posiciones[4][1] = 40
        
        this.posiciones[5][0] = 350
        this.posiciones[5][1] = 10
    }
    mathPoricion(){
        return Math.floor(Math.random()*6)
    }
    mathimagen(){
        return Math.floor(Math.random()*2)+1
    }
    ponertopo(){
    let posiY = this.mathPoricion()
    let imagen = this.mathimagen()
    this.imagenTopo.src = "src/img/topo"+imagen+".png"

    this.imagenTopo.style.width = "23%"
    this.imagenTopo.style.top = this.posiciones[posiY][0]+"px"
    this.imagenTopo.style.right = this.posiciones[posiY][1]+"%"
    this.imagenTopo.style.position = "absolute"
    document.body.appendChild(this.imagenTopo)
    this.imagenTopo.id = "topo" + this.mathPoricion()
    }
    cambiarPosicion(){
        let posiY = this.mathPoricion()
        let imagen = this.mathimagen()
        this.imagenTopo.src = "src/img/topo"+imagen+".png"
        this.imagenTopo.style.top = this.posiciones[posiY][0]+"px"
        this.imagenTopo.style.right = this.posiciones[posiY][1]+"%"
    }
    verificarPosicion(enemigos){
        if(enemigos.style.top == this.imagenTopo.style.top){
            if(enemigos.style.left == this.imagenTopo.style.left){
                this.cambiarPosicion()
            }
        }
    }
}