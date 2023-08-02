const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");
const today = new Date();
const noon = -180;
const secondStart = today.getSeconds() * 6 + noon;
const minuteStart = today.getMinutes() * 6 + noon;
const hourStart = today.getHours() * 30 + today.getMinutes() * 0.5 + noon;
const clock = document.getElementById("clock");

//--------------------Clock hands working
let tick = 0;

function checkTime() {
  const currentTime = new Date();
  tick = Math.floor((currentTime - today) / 1000);
}

setInterval(checkTime, 60000);
setInterval(time, 1000);

function time() {
  tick++;
  secondHand.style.transform = `rotate(${secondStart + tick * 6}deg)`;
  minuteHand.style.transform = `rotate(${
    minuteStart + tick * (360 / 60 / 60)
  }deg)`;
  hourHand.style.transform = `rotate(${
    hourStart + tick * (360 / 12 / 60 / 60)
  }deg)`;
}

for (let i = 1; i <= 60; i++) {
  document.getElementById(`tic-${i}`).style.transform = `rotate(${
    noon + i * 6
  }deg)`;
}
