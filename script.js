let totalSeconds = 25 * 60;
let timerInterval = null;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Time's up! Great focus session.");
                isRunning = false;
            }
        }, 1000);
    }
});

pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    totalSeconds = 25 * 60;
    updateDisplay();
});