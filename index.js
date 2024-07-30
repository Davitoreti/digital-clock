const hourPointer = document.getElementById('hour-hand');
const minutePointer = document.getElementById('minute-hand');
const secondPointer = document.getElementById('second-hand');

const currentTime = new Date();
const hourCurrent = currentTime.getHours();
const minuteCurrent = currentTime.getMinutes();
const secondCurrent = currentTime.getSeconds();

let second = 0;
let minute = 0;
let hour = 0;

const timeNow = setInterval(() => {
    
    do {
        secondPointer.classList.add('move');
    
    second++;

    
    } while (second <= 60);


    if(second === 60){
        second = 0;
        minute++
    }

    if(minute === 60){
        minute = 0;
        hour++
    }


}, 1000)
