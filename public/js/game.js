import "./moveBetweenScreens.js";
import { updateScoreboard } from "./scoreboard.js";

document.getElementById("player-name").innerText = localStorage.getItem("playerName");

updateScoreboard()
