let i = 0;

function updateClock() {
    const clock = document.querySelector('.clock');
    var currentTime = new Date();

    var currentHours = currentTime.getHours();

    var currentMinutes = currentTime.getMinutes();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

    var currentTimeString = currentHours + ":" + currentMinutes 
    clock.innerHTML = currentTimeString;
    let t = setTimeout(function(){ updateClock() }, 1000);
}


function set_title() {
    const title = document.querySelector('.title');

    title.innerHTML = playlist[i];
}

updateClock();

