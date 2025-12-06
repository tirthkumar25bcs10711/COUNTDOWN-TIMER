const minInput = document.getElementById('minInput');
const secInput = document.getElementById('secInput');
const display = document.getElementById('display');
const inputArea = document.getElementById('inputArea');

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const cancelBtn = document.getElementById('cancelBtn');
const stopBeepBtn = document.getElementById('stopBeepBtn');

const pausedControls = document.getElementById('pausedControls');

let myTimer = null;
let totalSeconds = 0;
let audioTimeout = null;

const alarmSound = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');

function updateDisplay(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function runTimer() {
    inputArea.classList.add('disabled');
    clearInterval(myTimer);

    myTimer = setInterval(() => {
        totalSeconds--;
        updateDisplay(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(myTimer);
            timerFinished();
        }
    }, 1000);
}

startBtn.addEventListener('click', () => {
    const mins = parseInt(minInput.value) || 0;
    const secs = parseInt(secInput.value) || 0;

    if (mins === 0 && secs === 0) {
        alert("Please enter a time!");
        return;
    }
    if (mins < 0 || secs < 0) {
        alert("No negative numbers!");
        return;
    }

    totalSeconds = (mins * 60) + secs;
    updateDisplay(totalSeconds);

    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');

    runTimer();
});

pauseBtn.addEventListener('click', () => {
    clearInterval(myTimer);
    
    pauseBtn.classList.add('hidden');
    pausedControls.classList.remove('hidden');
    
    display.style.opacity = "0.5";
});

resumeBtn.addEventListener('click', () => {
    pausedControls.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    
    display.style.opacity = "1";

    runTimer();
});

cancelBtn.addEventListener('click', () => {
    clearInterval(myTimer);
    
    pausedControls.classList.add('hidden');
    startBtn.classList.remove('hidden');
    inputArea.classList.remove('disabled');
    display.style.opacity = "1";
    
    totalSeconds = 0;
    updateDisplay(0);
    minInput.value = "";
    secInput.value = "";
});

stopBeepBtn.addEventListener('click', () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    clearTimeout(audioTimeout);
    
    stopBeepBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
    inputArea.classList.remove('disabled');
    display.style.color = "black"; 
    
    minInput.value = "";
    secInput.value = "";
    updateDisplay(0);
});

function timerFinished() {
    display.style.color = "#ff3b30";
    
    pauseBtn.classList.add('hidden');
    pausedControls.classList.add('hidden');
    startBtn.classList.add('hidden');
    stopBeepBtn.classList.remove('hidden');

    alarmSound.loop = true;
    alarmSound.play();

    audioTimeout = setTimeout(() => {
        stopBeepBtn.click();
    }, 10000);

    if (Notification.permission === "granted") {
        new Notification("Timer Finished!");
    }
}

if (Notification.permission !== "granted") {
    Notification.requestPermission();
}