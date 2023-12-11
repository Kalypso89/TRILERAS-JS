import { state } from "./state.js";

const winCounter = document.getElementById("win-counter");
const lossCounter = document.getElementById("loss-counter");
const roundCounter = document.getElementById("round-counter");

export function updateScoreboard () {
    winCounter.innerText = state.win;
    lossCounter.innerText = state.loss;
    roundCounter.innerText = `${state.currentRound} / 5`;
}