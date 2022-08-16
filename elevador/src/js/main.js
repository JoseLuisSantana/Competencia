let dificultadAtras = document.getElementById("dificultadatras")
let dificultadSiguiente = document.getElementById("dificultadsiguiente")
let dificultadNumero = document.getElementById("numeroDificultad")

let botonElevadorMas = document.getElementById("personasAdelante")
let botonElevadormMnos = document.getElementById("personasAtras")
let botonElevadorTotal = document.getElementById("numeroDePersonas")
let puntos = document.getElementById("puntos")
let rankin = document.getElementById("rankintop")
let personasEnela = document.getElementById("personasEnElElevador")


let mispuntos = 0
let elevador = new Elevador()
let pisoActual = 0
let personasEnElElevador = 0
let intervaloTiempo = 5000
let limitepersonas = 5
let personasEnPiso = []
let pisos = []
let contador = 0
let nivelDEDificultad = 1
let agregar




dificultadAtras.addEventListener('click', function(e) {


    if(nivelDEDificultad <= 1){
        nivelDEDificultad = 1
        intervaloTiempo = 6000
    }
    else{
        intervaloTiempo +=2000
        nivelDEDificultad--
    }
    dificultadNumero.innerText =nivelDEDificultad
    
})
dificultadSiguiente.addEventListener('click', function(e) { 
    if(nivelDEDificultad >= 3){
        nivelDEDificultad = 3
        intervaloTiempo =2000
    }
    else{
        intervaloTiempo -=2000
        nivelDEDificultad++
    }
    dificultadNumero.innerText =nivelDEDificultad
})


////////////////////////////////////////////////////////////////////
botonElevadorMas.addEventListener('click', function(e) {
    if(limitepersonas >= 10){
        nivelDEDificultad = 10
        
    }
    else{
        
        limitepersonas +=1
    }
    botonElevadorTotal.innerText =limitepersonas
    
})
botonElevadormMnos.addEventListener('click', function(e) { 
    if(limitepersonas <= 5){
        nivelDEDificultad = 5
        
    }
    else{
        
        limitepersonas -=1
    }
    botonElevadorTotal.innerText =limitepersonas
})
/////////////////////////////////////////////////////////////

let numero = new Array()
let direccionTexto = "/src/rank.txt"
let archivoTxt = new XMLHttpRequest()
archivoTxt.open("GET",direccionTexto,false)
archivoTxt.send(null)
var txt = archivoTxt.responseText
for (var i = 0; i < txt.length; i++){
    numero.push(txt[i])
}
archivoTxt.responseText = "sadadasdsad"
console.log(numero)
console.log(txt)
console.log(numero[4])
console.log(numero[5])
console.log(numero[6])
console.log(numero[13])
console.log(numero[14])
console.log(numero[15])
console.log(numero[22])
console.log(numero[23])
console.log(numero[24])
console.log(numero[31])
console.log(numero[32])
console.log(numero[33])

rankin.innerText = txt




/////////////////////////////////////////////////////////////////////
for(let i = 0; i < 5; i++){
    personasEnPiso[i] = new Array()
    pisos[i] = 0
    

}

console.log(pisos)

document.onkeydown = function(e){
    let tecla = e.keyCode
    if(tecla == 87 && elevador.movimiento == false){//arriba
        elevador.animacion(-1,-1)
    }else if(tecla == 83 && elevador.movimiento == false){//abajo
        elevador.animacion(1,1)
    }
    
}

for(let i = 0; i < 5; i++){
    
    pisos[i] = 0
    

}

let intervalRecojerPersonas = setInterval(() => {
    
    elevadorPersonas(elevador.posicionActual,elevador.movimiento)
    
    if(pisos[0] == 5 || pisos[1] == 5 || pisos[2] == 5 || pisos[3] == 5 ||
        pisos[4] == 5 || pisos[5] == 5 
        ){
        alert("has perdido")
        clearInterval(intervalRecojerPersonas)
        clearInterval(agregar)
    }
    

}, 1000);



let elevadorqq = setInterval(() => {
    
    if(elevador.posicionActual == 4 && personasEnElElevador != 0){
        elevador.dejarPersonas(personasEnElElevador)
        personasEnElElevador = 0
        personasEnela.innerText = personasEnElElevador
    }
    
}, 500);

 

generarPersonasInterval()






function elevadorPersonas(piso,bool){
    
    if(bool == false){
        
        if(personasEnElElevador >= limitepersonas){

            return
            alert("lleno")
        }
            
        if(pisos[piso] != 0 && personasEnElElevador < limitepersonas && piso != 4){
            
            mispuntos += pisos[piso]
            personasEnElElevador += pisos[piso]
            ////////
            puntos.innerText = mispuntos
            personasEnela.innerText = personasEnElElevador
            //////////////
                for(let i = 0; i < pisos[piso]; i++){
                    document.body.removeChild(personasEnPiso[piso][i].imagen)
                    
                }
                personasEnPiso[piso]= new Array()
                pisos[piso] = 0
            
        }
    }
        
}

function generarPersonasInterval() {
    let persona = new Persona()
            persona.definriPiso()
            persona.aparecerPersonas()
            persona.aparecerMonos()
            persona.moverPersonas(0,345)
            personasEnPiso[persona.piso][pisos[persona.piso]] = persona
            pisos[persona.piso]++
            contador++
    clearInterval(agregar)
    agregar = setInterval(generarPersonasInterval, intervaloTiempo)
}
