document.addEventListener("DOMContentLoaded", main);

function main () {
    document.getElementById("start__form").addEventListener("submit",submitForm);
};

function submitForm (event) { //handler del evento cuando se envía el formulario
    event.preventDefault();
    localStorage.setItem("playerName", event.target.player.value);
    location.pathname ="/public/pages/game.html";
}