const timerElement = document.querySelector("#timer span");

let interval

export function startTimer (callback) {
    let secondsLeft = 30;

    interval = setInterval(()=>{
        secondsLeft--;

        if (secondsLeft === -1) {
            callback();
        }

        if (secondsLeft >= 10) {
            timerElement.innerText = secondsLeft;
        } else {
            timerElement.innerText = `0${secondsLeft}`;
        }


    }, 1000);
}

export function stopTimer () {
    clearInterval(interval)
}