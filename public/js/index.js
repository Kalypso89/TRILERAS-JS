// CAMBIAR EN LO DE LAS CHICAS PORQUE NO HACE FALTA EL DOM CONTENT LOADED
// CAMBIOS DE NOMBRE DE ARCHIVOS INDEX.JS, GAME.JS

document.getElementById("start__form").addEventListener("submit",submitForm);

function submitForm (event) { //handler del evento cuando se envía el formulario
    event.preventDefault();
    //let playerName = event.target.player.value; ya no hace falta est línea
    localStorage.setItem("playerName", event.target.player.value);
    location.pathname ="/public/pages/game.html";
}