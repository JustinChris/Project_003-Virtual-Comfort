var x = document.getElementById("Myaudio");

function next_audio() {
    if (i == playlist.length){
        i = 0;
    }
    set_title();
    x.src = `Assets/music/${playlist[i]}`;
    i++;
}

function back_audio() {
    if (i == -1) {
        i = playlist.length - 1;
    }
    set_title();
    x.src = `Assets/music/${playlist[i]}`;
    i--;
}

function play_audio(){
    if (x.paused) {
        x.play();
    }else{
        x.pause();
    }
}

