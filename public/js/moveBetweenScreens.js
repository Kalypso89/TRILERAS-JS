import { hideBall } from "./hideBall.js";
import { repeatMoveCups } from "./moveCups.js";
import { initPickCup } from "./pickingCup.js";
import { updateScoreboard } from "./scoreboard.js";
import { state } from "./state.js";

const hideBallTime = 1000;
const movingCupsTime = 10000;

function play() {
    document.body.className = "movingCups";
    hideBall();
    setTimeout(repeatMoveCups, hideBallTime);
    setTimeout(initPickCup, movingCupsTime);
}

document.querySelector(".play-btn").addEventListener("click", play)

function nextRound () {
    state.currentRound++;
    updateScoreboard();
    document.body.className = "beforePlaying";
}

document.querySelector("button.winningRound.losingRound").addEventListener("click", nextRound)

function nextGame () {


}

document.querySelector("button.winningGame.losingGame").addEventListener("click", nextGame)

