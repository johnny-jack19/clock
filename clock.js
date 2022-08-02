const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const today = new Date();
const noon = -180;
const secondStart = today.getSeconds() * 6 + noon;
const minuteStart = today.getMinutes() * 6 + noon;
const hourStart = (today.getHours() * 30) + (today.getMinutes() * .5) + noon;
const clock = document.getElementById('clock');


//--------------------Clock hands working
let s = 0;
let m = 0;
let h = 0;

setInterval(time, 1000);

function time() {
    secondHand.style.transform = `rotate(${secondStart + s}deg)`;
    s += 6;
    minuteHand.style.transform = `rotate(${minuteStart + m}deg)`;
    m += (360 / 60 /60);
    hourHand.style.transform = `rotate(${hourStart + h}deg)`;
    h += (360 / 12 / 60 / 60);
}

for (let i = 1; i <= 60; i++) {
    document.getElementById(`tic-${i}`).style.transform = `rotate(${noon + (i  * 6)}deg)`
}