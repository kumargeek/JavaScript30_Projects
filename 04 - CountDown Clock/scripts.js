const timerDisplay = document.querySelector('.display__time-left');
const endDisplay = document.querySelector('.display__end-time');
let countdown;

const timerBtns = document.querySelectorAll('.timer__button');
timerBtns.forEach(timerBtn => timerBtn.addEventListener('click', startTimer));

document.querySelector('#stopbtn').addEventListener('click', () => {
    clearInterval(countdown);
    endDisplay.textContent = '';
    timerDisplay.textContent = '0:00';
});

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const seconds = this.minutes.value * 60;
    timer(seconds);
})

function startTimer() {
    const seconds = this.dataset.time;
    timer(seconds);
}

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.ceil((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}
function displayTimeLeft(time) {
    if (time === -0) time = 0;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
}
function displayEndTime(time) {
    const end = new Date(time)
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endDisplay.textContent = `Back At ${hours}:${minutes < 10 ? 0 : ''}${minutes}`;
}