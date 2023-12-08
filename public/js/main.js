// Guardar el nombre del player
//Ir a la página de game con el botón

document.addEventListener("DOMContentLoaded", main);

function main () {
    document.getElementById("start__form").addEventListener("submit",submitForm);
};

function submitForm (event) { //handler del evento cuando se envía el formulario
    event.preventDefault();
    //let playerName = event.target.player.value; ya no hace falta est línea
    localStorage.setItem("playerName", event.target.player.value);
    location.pathname ="/public/pages/game.html";
}


/*

1) RAMA feature-home-page-local-storage
hecha

2) RAMA feature-play-round

html> asignar id 1 al vaso con la bola y clase 0 a los otros dos??

Inicializar: 
*play
*hideBall
*moveCups
*stopCups
*pickCups

function play()
-cambia el texto de instrucción
-se esconde la bola en el vaso central
-se empiezan a mover los vasos
-desaparece el botón de play

function hideBall()
-esconder la bola debajo del vaso asignado con el valor 1

function moveCups()
(la bola permanece siempre en el mismo vaso)
-se mueven de forma random

function stopCups()
-cambia el texto de instrucción
-aparece el timer
-los vasos se paran
-empieza en el timer la cuenta atrás

function pickCups()
-comprobar si elige el vaso correcto o no
*si elige el correcto aparece la pantalla win-round
*si no elige el correcto aparece la pantalla lose-round


>>IMPORTANTE!!!<<

Que sea mejor una rama para round que incluya win y lose; y otra rama para game que incluya win y lose??

3) RAMA feature-win-round 

en el HTML> dejar los divs vacíos??

function winRound()
-alert 
*con texto de ganar ronda y valor de namePlayer
*con texto de continuar
*con botón de (next round o start new game)
-marcador con un punto en el input de win
-subir el vaso ganador que eligió para que se vea la bola debajo  > es la misma función no?
-comprobar si quedan rondas disponibles checkRounds()

function showBall()
-si acertó el vaso:
*levantar el vaso con la bola 
-si falló el vaso:
*levantar el vaso elegido y el que tiene la bola

function animateButton()
-que se encoja y se contraiga el botón, sea el de next round o el de start game??

function CheckRounds()
*si quedan:
    -botón de next round
    -animación de movimiento en next round
    -listener para ir a la siguiente ronda
    *que se sume uno al número de ronda (hasta 5)
    *mantener el marcador con el punto de victoria sumado
*si no quedan:
    -botón de start new game
    -animación de movimiento en start new game

function nextRound()
*si ganó
*si perdió


4) RAMA feature-lose-round

en el HTML> dejar los divs vacíos??

function loseRound()
-alert 
*con texto de perder ronda y valor de namePlayer
*con texto de continuar
*con botón de (next round o start new game)
-marcador con un punto en el input de loss
-subir el vaso para que se vea la bola debajo > es la misma función de showBall() no?
-comprobar si quedan rondas disponibles

-animación de movimiento en next round (function animateButton)
-listener para ir a la siguiente ronda
*que se sume uno al número de ronda (hasta 5)
*mantener el marcador con el punto de derrota sumado

5) RAMA feature-win-game

-alert 
*con texto de ganar ronda y valor de namePlayer
*con texto de continuar
*con botón de next round
-marcador con un punto en el input de win
-subir el vaso ganador que eligió para que se vea la bola debajo  > es la misma función no?
-animación de movimiento en next round (function animateButton)
-listener para volver al estado inicial de juego si pincha el botón next round

function animateButton
-que se encoja y se contraiga el botón, sea el de next round o el de start game??


6) RAMA feature-lose-game



*/