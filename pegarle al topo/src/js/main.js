let fondo = document.getElementById('fondo')
let audioGolpe = document.createElement('audio')
let audioFallo = document.createElement('audio')
audioGolpe.src = "src/audio/golpe.mp3"
audioFallo.src = "src/audio/dross2.mp3"
let enemigos = []
for(let i = 0; i < 3; i++){
    let topo = new Topo()
    enemigos[i] = topo
    enemigos[i].llenado()
    enemigos[i].ponertopo()
}
for(let i = 0; i < 3; i++){
    enemigos[0].verificarPosicion(enemigos[i].imagenTopo)
}
let puntos = 0
let vidas = 3






fondo.addEventListener('click', function () {
    
    vidas--
})



enemigos[0].imagenTopo.addEventListener('click', function() {
    
    audioGolpe.play()
    enemigos[0].cambiarPosicion()
    puntos++
})
enemigos[1].imagenTopo.addEventListener('click', function() {
    

    audioGolpe.play()
    enemigos[1].cambiarPosicion()
    puntos++
})
enemigos[2].imagenTopo.addEventListener('click', function() {
    
    audioGolpe.play()
    enemigos[2].cambiarPosicion()
    puntos++
})
let intervaloPosiciones = setInterval(() => {
    if(enemigos.length != 0){
        enemigos[0].ponertopo()
        enemigos[1].ponertopo()
        enemigos[2].ponertopo()
        
    }
}, 1000);
let intervaloVidas = setInterval(() => {
    

    if(vidas==0){
        audioFallo.src = "src/audio/dross.mp3"
        audioFallo.play()
        if(audioFallo.currentTime >= 3)
            audioFallo.pause()
        console.log(audioFallo.currentTime)
        clearInterval(intervaloPosiciones)
        clearInterval(intervaloVidas)
        setTimeout(() => {
            
        }, );
    }
    if(enemigos.length != 0){
        if(enemigos[0].imagenTopo.style.top == enemigos[1].imagenTopo.style.top &&
            enemigos[0].imagenTopo.style.right == enemigos[1].imagenTopo.style.right
            ){
            enemigos[0].imagenTopo.src = "src/img/topo3.png"
            enemigos[1].imagenTopo.src = "src/img/topo3.png"
        }
        if(enemigos[0].imagenTopo.style.top == enemigos[2].imagenTopo.style.top &&
            enemigos[0].imagenTopo.style.right == enemigos[2].imagenTopo.style.right
            ){
            enemigos[0].imagenTopo.src = "src/img/topo3.png"
            enemigos[2].imagenTopo.src = "src/img/topo3.png"
        }
        if(enemigos[2].imagenTopo.style.top == enemigos[1].imagenTopo.style.top &&
            enemigos[2].imagenTopo.style.right == enemigos[1].imagenTopo.style.right
            ){
            enemigos[2].imagenTopo.src = "src/img/topo3.png"
            enemigos[1].imagenTopo.src = "src/img/topo3.png"
        }
    }
}, 10);
let fff = setInterval(() => {
    console.log(audioFallo.currentTime)
    if(audioFallo.currentTime >= 3.5 && vidas == 0){
        audioFallo.pause()
        audioFallo.currentTime = 20
        audioFallo.play()
        clearInterval(fff)
    }
            
    
    
}, 10);


