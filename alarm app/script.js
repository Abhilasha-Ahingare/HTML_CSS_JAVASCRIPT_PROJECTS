const buttonEl = document.querySelector("button");
const deleteEl = document.querySelector(".delete");
const timeShow = document.querySelector("h1");
const addEl = document.querySelector(".add");
const numberAdd = document.querySelector(".number-add");
const time1 = document.querySelector(".time1");
const time2 = document.querySelector(".time2");
const checkbox = document.querySelector(".checkbox");

buttonEl.addEventListener("click", () => {
  addEl.style.display = "flex";
  checkbox.style.display = "flex";
});

time1.addEventListener("change", () => {
  numberAdd.innerHTML = `${time1.value} : `;
});

time2.addEventListener("change", () => {
  numberAdd.innerHTML = `${time1.value} : ${time2.value}`;
});

function timeCreate() {
  setInterval(() => {
    let a = new Date();
    let hours = a.getHours();
    let min = a.getMinutes();
    let second = a.getSeconds();
    let result = `${hours} : ${min} : ${second}`;
    timeShow.textContent = result;
  }, 1000);
}
timeCreate();

const songcreate = document.createElement("audio");
songcreate.src = "song/Sahiba - Vijay Deverakonda _ Radhika Madan _ Hindi.mp3";
songcreate.autoplay = false;
songcreate.muted = false;
songcreate.controls = true;
songcreate.loop = true;
document.querySelector(".container").appendChild(songcreate);

function checkTime() {
  const currentTime = new Date();
  const selectedTime = `${time1.value}:${time2.value}`;
  const currentTimeString = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

  if (selectedTime === currentTimeString) {
    songcreate.play();
    alert("Time matches");
    clearInterval(intervalId); // Clear the interval once the time matches
  }
}

// Set an interval to continuously check the time
let intervalId = setInterval(checkTime, 1000); // Check every 1 second

checkbox.addEventListener("click", () => {
  checkTime();
});

deleteEl.addEventListener("click", () => {
  addEl.style.display = "none";
  checkbox.style.display = "none";

  songcreate.pause();
});
