//declaracion de las variables
let escenario = new Escenario("/src/img/escenario2.png");
let isaac = new Personaje();
let objeto1 = new Objeto();
let objeto2 = new Objeto();

objeto1.crear()
objeto2.crear()
const progresoVida = document.getElementById('progreso')
const barraDeVidaPorcentaje = document.getElementById("porcentaje")
let cantidad = 0
let enemigos = []
let numeroEnemigos = Math.floor(Math.random() *4)+1

for(let i = 0; i < numeroEnemigos; i++){
    let enemigo = new Enemigos(); 
    bool = Math.floor(Math.random() *4)
    
    enemigos[i] = enemigo
    enemigos[i].crearEnemigo()
    enemigos[i].tiposDeEnemigos()
    
}
//cada cierto tiempo activa el atake del personaje 
let intervaloonda = setInterval(() => {
    
    alert("la onda de choque esta lista")
    isaac.arma = true
}, 10000);

//delimita los limites que tiene el escenario
escenario.ponerLimites()

//lee las teclas precionadas por el jugador
document.onkeydown = function(e) {
    let tecla = e.keyCode
    
    if(tecla == 68){//derecha
        isaac.direccion = "derecha"
    }else if(tecla == 65){//izquierda
        isaac.direccion = "izquierda"
    }else if(tecla == 87){//arriba
        isaac.direccion = "arriba"
    }else if(tecla == 83){//abajo
        isaac.direccion = "abajo"
    }else if(tecla == 75 || tecla == 74 || tecla == 73 || tecla == 76){
        
        for(let i = 0;i<enemigos.length;i++){
            if(enemigos[i].vida <= 0){
                enemigos[i].imagen.display = "none"
                document.body.removeChild(enemigos[i].imagen)
                enemigos.splice(i,1)
                
            }else{
                if(isaac.arma == true){
                    enemigos[i].vida --
                    let bala = new Bala(isaac.posicionx,isaac.posiciony);
                    bala.captura()
                }
                    
            }
            
        }
        isaac.arma = false
    }
    else{
        return
    }
    
    isaac.mover(isaac.moverD(escenario.limites[0],escenario.limites[1],escenario.limites[2],escenario.limites[3]))
}
let contador = 0
/**
 * 
 * @param {objet} enemigo 
 * @param {bool} bool
 * @description controla los movimientos de los enemigos y verifica las coliciones con el
 *              jugador esti tambien verifica la condicion del jugador si la vida del jugador
 *              llega a cero el juego termina  
 */
function boot(enemigo,bool) {
    if(bool){
        
        let intervalo = setInterval(function () {
            const aleatorio = Math.floor(Math.random() * 4);
            progresoVida.style.width = isaac.vida +"%"
            barraDeVidaPorcentaje.textContent = '${isaac.vida}%'
            if(enemigo.vida <= 0){
                enemigo.imagen.display = "none"
                document.body.removeChild(enemigo.imagen)
                enemigos.splice(0,1)
                
            }
            if(isaac.posiciony < enemigo.posiciony || aleatorio == 0) {
                enemigo.posiciony -= enemigo.velocidad
                enemigo.imagen.style.top = enemigo.posiciony + "px"
            } if(isaac.posicionx < enemigo.posicionx || aleatorio == 1){
                enemigo.posicionx -= enemigo.velocidad
                enemigo.imagen.style.left = enemigo.posicionx + "px"
            } if(isaac.posiciony > enemigo.posiciony || aleatorio == 2){
                enemigo.posiciony += enemigo.velocidad
                enemigo.imagen.style.top = enemigo.posiciony + "px"
            }
            if(isaac.posicionx > enemigo.posicionx || aleatorio == 3){
                enemigo.posicionx += enemigo.velocidad
                enemigo.imagen.style.left = enemigo.posicionx + "px"
            }
            setTimeout(() => {
                
                if (enemigo.imagen.offsetTop -10+ enemigo.imagen.height -50 > isaac.imagen.offsetTop-10 && 
                    enemigo.imagen.offsetTop -10< isaac.imagen.offsetTop-50 + isaac.imagen.height -10&& 
                    enemigo.imagen.offsetLeft -10+ enemigo.imagen.width -50 > isaac.imagen.offsetLeft-30 && 
                    enemigo.imagen.offsetLeft -10< isaac.imagen.offsetLeft-30 + isaac.imagen.width-30
                    ){
                            console.log(enemigo)
                            console.log(enemigo.imagen.offsetTop)
                            console.log(enemigo.imagen.width)
                            isaac.vida -=enemigo.dano
                            console.log(isaac.vida)
                        
                }
            }, 1000);
            if(isaac.vida < 0 && contador != 1){
                clearInterval(intervalo)
                alert("has muerto")
                clearInterval(intervaloonda)
                contador++
                return
            }
            
        },100)
    }
}

let vida = isaac.vida
for(let i = 0; i < enemigos.length; i++){
    
    boot(enemigos[i],enemigos[i].moverD(escenario.limites[0],escenario.limites[1],escenario.limites[2],escenario.limites[3]))
    
}
let obetos =setInterval(() => {
    objeto1.crear()
    objeto1.bonus()
    objeto2.crear()
    objeto2.bonus()
    
}, 20000);

let win = setInterval(() => {
    objeto1.recorrido(isaac) 
    objeto2.recorrido(isaac) 
    if(enemigos.length ==  0){
        

        alert("has ganado")
        clearInterval(win)
    }
    console.log(isaac)
    console.log(objeto1)
}, 70);


