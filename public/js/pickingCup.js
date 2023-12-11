import { showBall } from "./hideBall.js";
import { updateScoreboard } from "./scoreboard.js";
import { state } from "./state.js";
import { startTimer, stopTimer } from "./timer.js";

export function initPickCup() {
    console.log("Iniciar elección");
    document.body.className = "pickingCup";
    startTimer(clickOnWrongCup); // si termina el tiempo es como clicar en un vaso erróneo
    document.querySelectorAll("#cup1, #cup3").forEach((cup)=>{
        cup.addEventListener("click",clickOnWrongCup);
    })
    
    document.getElementById("cup2").addEventListener("click",clickOnRightCup);
}

function stopPickCup() {
    document.querySelectorAll("#cup1, #cup3").forEach((cup)=>{
        cup.removeEventListener("click",clickOnWrongCup);
    })
    
    document.getElementById("cup2").removeEventListener("click",clickOnRightCup);

    stopTimer()

}

function clickOnRightCup() {
    console.log("Clicó en el correcto");
    //que no acepte otra elección
    stopPickCup();
    //subir el vaso ganador que eligió para que se vea la bola debajo  > es la misma función no?
    showBall("cup2");
    //marcador con un punto en el input de win
    state.win++;
    updateScoreboard();
    //comprobar si quedan rondas disponibles checkRounds()
        //si quedan rondas (no llegó a 3 en win)
        //no quedan rondas (es el 3 win)
    
    if (state.win < 3) {
        document.body.className = "winningRound";
    } else {
        document.body.className = "winningGame";
    }

}
function clickOnWrongCup(event) {
    console.log("Clicó en el incorrecto");
    //que no acepte otra elección
    stopPickCup();

    if (event) {
        //subir el vaso que eligió y el ganador
        showBall(event.currentTarget.id);
    }

    showBall("cup2");
    //marcador con un punto en el input de loss
    state.loss++;
    updateScoreboard();
    //comprobar si quedan rondas disponibles checkRounds()
        //si quedan rondas (no llegó a 3 en loss)
        //no quedan rondas (es el 3 loss)
    if (state.loss < 3) {
        document.body.className = "losingRound";
    } else {
        document.body.className = "losingGame";
    }
}
