const input = document.querySelector(".input");
const button = document.querySelector(".button");
const timersContainer = document.querySelector(".timers-container");

function timerText(newTimer) {
    let t = input.value;
    newTimer.textContent = t;
    var timer = setInterval(() => {
        if (t > 1) {
            t--;
            newTimer.textContent = t;
        } else {
            clearInterval(timer);
            newTimer.classList.add("pop");
            setTimeout(() => {
                newTimer.remove();
            }, 1000);
        }
    }, 1000);
};

button.addEventListener("click", () => {
    if (input.value && parseInt(input.value, 10) > 0 && input.value.charAt(0) !== "0") {
        var newTimer = document.createElement("div");
        newTimer.classList.add("timer", "animate")
        timersContainer.appendChild(newTimer);
        timerText(newTimer);
        input.value = null;
    }
});