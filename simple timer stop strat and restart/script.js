const timerVal = document.getElementById("timer");

const startVal = document.getElementById("start");

const stopVal = document.getElementById("stop");

const resetVal = document.getElementById("restart");

let timerValue = 0;
let time;

timerVal.textContent = timerValue;

startVal.addEventListener("click", () => {
  time = setInterval(() => {
    timerValue++;
    timerVal.textContent = `  00 : 00 : ${timerValue}`;
  }, 100);
});

stopVal.addEventListener("click", () => {
  clearInterval(time);
});

resetVal.addEventListener("click", () => {
  clearInterval(time);
  timerValue = 0;
  timerVal.textContent = `00: 00 : ${timerValue}`;
});
