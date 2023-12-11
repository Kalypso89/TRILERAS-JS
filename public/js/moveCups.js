
function randomPositions () {
    const positions = ["left", "middle", "right"];
    
    const random = [];

    while (positions.length) {
        const index = Math.floor(Math.random() * positions.length);

        const position = positions.splice(index, 1);

        random.push(position);
    }

    return random;
}


function moveCups () {
    const newPositions = randomPositions();
        
    document.querySelectorAll('.cup').forEach((cup, index) => {
        cup.classList.remove('left', 'middle', 'right');
        cup.classList.add(newPositions[index]);
        cup.style.zIndex = Math.floor(Math.random() * 10 + 1);
    });
}

export function repeatMoveCups() {
    moveCups();
    let counter = 19;
    const interval = setInterval(() => {
        moveCups();
        counter--;
        if (counter === 0) {
            clearInterval(interval);
        }
    }, 400);

}
