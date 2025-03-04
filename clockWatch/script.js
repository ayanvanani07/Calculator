let TimerDisplay = document.querySelector(".timerDisplay")
let startBtn = document.getElementById("startBtn")
let stopBtn = document.getElementById("stopBtn")
let resetBtn = document.getElementById("resetBtn")

let msec = 0;
let mins = 0;
let secs = 0;
let hour = 0;

let timerID = null

startBtn.addEventListener("click", function () {
    if (timerID !== null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10)
})
stopBtn.addEventListener("click", function(){
    clearInterval(timerID);

})
resetBtn.addEventListener("click", function () {
    clearInterval(timerID)
    TimerDisplay.innerHTML = `00 : 00 : 00 : 00`
    mins = secs = msec = hour = 0;
})


function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
            if (mins == 60) {
                mins = 0;
                hour++;
            }

        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hourString = hour < 10 ? `0${hour}` : hour;

    TimerDisplay.innerHTML = `${hourString} : ${minsString} : ${secsString} : ${msecString}`
}