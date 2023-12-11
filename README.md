# Plan

## Ramas

* 🗹 feature-home-page-local-storage
* ☐ feature-play-round
* ☐ feature-win-round
* ☐ feature-lose-round
* ☐ feature-win-game
* ☐ feature-lose-game

## feature-play-round

> `html`> asignar id 1 al vaso con la bola y clase 0 a los otros dos??

### Inicialización

Hay que inicializar todos los módulos.

A priori los módulos parece que son los siguientes

* play
* hideBall
* moveCups
* stopCups >>> se paran solos con la función anterior
* pickCup

### Play

>>function play()
-cambia el texto de instrucción y desaparece el botón de play
-se esconde la bola en el vaso central
-se empiezan a mover los vasos


Al empezar una ronda:

1. movemos el vaso de la bola al centro
1. cambia el texto de instrucción (usa la clase en el body): stay focused >> INDEPENDIENTE
1. desaparece el botón de play (usa la clase en el body) >> INDEPENDIENTE
1. se esconde la bola en el vaso central
    * position absolute
    * su vaso tiene position relative/absolute
    * usa la clase en el body para que el top meta la bola dentro o no
    * usa transition para que se mueva
1. se empiezan a mover los vasos
    * ya veremos cómo se hace

### hideBall

>>function hideBall()
-esconder la bola debajo del vaso asignado con el valor 1

Hay que esconder la bola debajo del vaso asignado con el valor 1
cuando se cambia la clase del body el top de la bola cambia o no
siempre se esconde la bola debajo del vaso central

### moveCups

>>function moveCups()
(la bola permanece siempre en el mismo vaso)
-se mueven de forma random

Hay que barajar los vasos sobre el eje x
**MIRAR IMPLEMENTACIÓN: con las posiciones??
La bola debe permanecer debajo de su vaso. Está garantizado porque la bola es hija del vaso.
El movimiento tiene que ser aleatorio

### stopCups

>>function stopCups()
-cambia el texto de instrucción
-aparece el timer
-los vasos se paran
-empieza en el timer la cuenta atrás

Cuando se termina de barajar:

1. los vasos se paran
1. cambia el texto de instrucción: pick a cup
1. aparece el timer
1. empieza en el timer la cuenta atrás

### pickCup

>>function pickCup()
-comprobar si elige el vaso correcto o no
*si elige el correcto aparece la pantalla win-round
*si no elige el correcto aparece la pantalla lose-round

1. Establece una función setTimeOut para el temporizador
    * si pasa el tiempo pierde >> pantalla de lose round (pantalla con el vaso ganador levantado)

1. Al hacer click:
    * Se detiene el temporizador
    * Comprobar si elige el vaso correcto o no:
        * si elige el correcto aparece la pantalla win-round
        * si no elige el correcto aparece la pantalla lose-round

>IMPORTANTE!!!
Que sea mejor una rama para round que incluya win y lose; y otra rama para game que incluya win y lose??

## feature-win-round

> en el HTML> dejar los divs vacíos??

function winRound()

- alert
* con texto de ganar ronda y valor de namePlayer
* con texto de continuar
* con botón de (next round o start new game)
- marcador con un punto en el input de win
- subir el vaso ganador que eligió para que se vea la bola debajo  > es la misma función no?
- comprobar si quedan rondas disponibles checkRounds()

function showBall()

- si acertó el vaso:
* levantar el vaso con la bola 
- si falló el vaso:
* levantar el vaso elegido y el que tiene la bola

function animateButton()
-que se encoja y se contraiga el botón, sea el de next round o el de start game??

function CheckRounds() >>>NO HACE FALTA
* si quedan:
    - botón de next round
    - animación de movimiento en next round
    - listener para ir a la siguiente ronda
    * que se sume uno al número de ronda (hasta 5)
    * mantener el marcador con el punto de victoria sumado >> local storage
* si no quedan:
    - botón de start new game
    - animación de movimiento en start new game
    - listener para ir a la pantalla de home

    * marcador final >> local storage???

function nextRound()
* si ganó
* si perdió


## feature-lose-round

en el HTML> dejar los divs vacíos??

function loseRound()
- alert 
* con texto de perder ronda y valor de namePlayer
* con texto de continuar
* con botón de (next round o start new game)
- marcador con un punto en el input de loss
- subir el vaso para que se vea la bola debajo > es la misma función de showBall() no?
- comprobar si quedan rondas disponibles

- animación de movimiento en next round (function animateButton)
- listener para ir a la siguiente ronda
* que se sume uno al número de ronda (hasta 5)
* mantener el marcador con el punto de derrota sumado

## feature-win-game

- alert 
* con texto de ganar ronda y valor de namePlayer
* con texto de continuar
* con botón de next round
- marcador con un punto en el input de win
- subir el vaso ganador que eligió para que se vea la bola debajo  > es la misma función no?
- animación de movimiento en next round (function animateButton)
- listener para volver al estado inicial de juego si pincha el botón next round

function animateButton
- que se encoja y se contraiga el botón, sea el de next round o el de start game??


## feature-lose-game

