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