export function hideBall() {
    console.log("Esconder bola");
    document.querySelectorAll(".cup").forEach((cup) => {
        cup.classList.add("down");
    })
}

export function showBall(cupId) {
    console.log("Subiendo el vaso", cupId);
    document.getElementById(cupId).classList.remove("down");
}
