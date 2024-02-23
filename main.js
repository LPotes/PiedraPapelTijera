let nombre
let eleccionJugador
let eleccionMaquina
let contadorJugador = 0
let contadorMaquina = 0
let racha = 0
let rachaMaxima = 0

function pedirNum() {
    eleccionJugador = prompt("¿Deseas jugar piedra(1), papel(2) o tijera(3)? \nResponda con un numero.")
    while (isNaN(eleccionJugador) || eleccionJugador > 3) {
        alert("Ingrese un valor del 1 al 3 por favor.")
        pedirNum()
    }
    return eleccionJugador
}

function eleccionJ() {
    eleccionJugador = pedirNum()
}
    
function eleccionM () {
    eleccionMaquina = Math.floor (Math.random() * 3) + 1
    console.log(eleccionMaquina)
}

function rachaVictorias() {
    racha = racha + 1
    compararRacha()
}

function compararRacha() {
    if (racha > rachaMaxima) {
        rachaMaxima = racha
    }
}

function quienGana(jugador, maquina) {
    if (jugador == maquina) {
        alert("Empate tu contrincante saco lo mismo que tu. Tu: " + contadorJugador + " Enemigo: " + contadorMaquina)
    }else if (jugador == 1) {
        if (maquina == 2) {
            contadorMaquina = contadorMaquina + 1
            alert("Tu contrincante saco PAPEL, perdiste. Tu: " + contadorJugador + " Enemigo: " + contadorMaquina)
            racha = 0
        }else if (maquina == 3) {
            contadorJugador = contadorJugador + 1
            alert("Tu contrincante saco TIJERAS, ganaste! Tu: " + contadorJugador + " Enemigo: " + contadorMaquina)
            rachaVictorias()
        }
    }else if (jugador == 2) {
        if (maquina == 1) {
            contadorJugador = contadorJugador + 1
            alert("Tu contrincante saco PIEDRA, ganaste! Tu: " + contadorJugador + " Enemigo: " + contadorMaquina)
            rachaVictorias()
        }else if (maquina == 3) {
            contadorMaquina = contadorMaquina + 1
            alert("Tu contrincante saco TIJERAS, perdiste. Tu: " + contadorJugador + " Enemigo: " + contadorMaquina)
            racha = 0
        }
    }else if (jugador == 3) {
        if (maquina == 1) {
            contadorMaquina = contadorMaquina + 1
            alert("Tu contrincante saco PIEDRA, perdiste. Tu: " + contadorJugador + " Enemigo: " + contadorMaquina)
            racha = 0
        }else if (maquina == 2) {
            contadorJugador = contadorJugador + 1
            alert("Tu contrincante saco PAPEL, ganaste! Tu: " + contadorJugador + " Enemigo: " + contadorMaquina)
            rachaVictorias()
            
        }
    }
}

function jugar() {
    while (true){
        eleccionJ()
        eleccionM()
        quienGana(eleccionJugador, eleccionMaquina)
        if (contadorJugador == 5) {
            alert("Ganaste el juego!! Tu: " + contadorJugador + " Enemigo: " + contadorMaquina + " tuviste una racha de " + rachaMaxima + " victorias consecutivas")
            break
        }
        if (contadorMaquina == 5) {
            alert("Perdiste :( Tu: " + contadorJugador + " Enemigo: " + contadorMaquina + "\nSi te sirve de consuelo, tuviste una racha de " + rachaMaxima + " victorias consecutivas")
            break
        }
    }
}

nombre = prompt("Ingrese su nombre","Nombre:")
alert("Hola " + nombre + ", ¿Preparado para jugar piedra papel o tijera? \nGana quien llegue a 5 puntos...")

jugar()