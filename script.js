const daysElements = document.getElementById('days');
const hoursElements = document.getElementById('hours');
const minutesElements = document.getElementById('minutes');
const secondsElements = document.getElementById('secondes');

// Release date of
const launch = "07 Oct 2021";

// countdown function
function countdown() {
    // taking time
    const launchDate = new Date(launch);
    const currentDate = new Date();

    const totalSeconds = (launchDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes  = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // entering the time on the screen
    daysElements.innerHTML = days;
    hoursElements.innerHTML = formatTime(hours);
    minutesElements.innerHTML = formatTime(minutes);
    secondsElements.innerTHML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// start countdown
countdown();

setInterval(countdown, 1000);