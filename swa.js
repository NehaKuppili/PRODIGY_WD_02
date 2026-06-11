let milliseconds = 0;
let timer = null;
let lapCount = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("lapList");

function updateDisplay() {

    let hrs = Math.floor(milliseconds / 360000);
    let mins = Math.floor((milliseconds % 360000) / 6000);
    let secs = Math.floor((milliseconds % 6000) / 100);
    let ms = milliseconds % 100;

    hrs = String(hrs).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    ms = String(ms).padStart(2, "0");

    display.textContent = `${hrs}:${mins}:${secs}:${ms}`;
}

startBtn.addEventListener("click", function () {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {
        milliseconds++;
        updateDisplay();
    }, 10);

});

pauseBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

});

resetBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    lapCount = 0;

    updateDisplay();

    lapList.innerHTML = "";

});

lapBtn.addEventListener("click", function () {

    if (milliseconds === 0) {
        return;
    }

    lapCount++;

    const lapItem = document.createElement("p");

    lapItem.textContent = `Lap ${lapCount} - ${display.textContent}`;

    lapList.appendChild(lapItem);

});
