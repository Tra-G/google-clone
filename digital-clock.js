/*const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const ampmEl = document.querySelector('.ampm');

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'

    if (h > 12){
        h = h - 12
        ampm = 'PM'
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampm, (innerText = ampm);
}

updateClock();