function getTime() {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {

    const time = getTime();
    const seconds = time.seconds;
    const minutes = time.minutes;
    const hours = time.hours;

    document.getElementById('second-hand').style.transform = `rotate(${seconds * 6}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minutes * 6}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hours * 30}deg)`;
}, 1000)
