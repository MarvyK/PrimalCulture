
// let aud = document.getElementById("BubbleBobble"); 

// function playAud() { 
//   aud.play(); 
// } 

// function pauseAud() { 
//   aud.pause(); 
// } 

var bobbleAudio = document.getElementById("bobbleAudio");
var playPauseButton = document.getElementById("btn_playPause");

function bobbleAudio_playPause() {
    var isPaused = bobbleAudio.paused;
    bobbleAudio[isPaused ? "play" : "pause"]();
    playPauseButton.innerHTML = '<i class="fa ' + (isPaused ? 'fa-music' : 'fa-pause') + ' fa-beat" style="--fa-beat-scale: 2""></i>';
}

playPauseButton.addEventListener("click", bobbleAudio_playPause);
