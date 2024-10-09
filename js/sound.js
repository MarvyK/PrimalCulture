
// let aud = document.getElementById("BubbleBobble"); 

// function playAud() { 
//   aud.play(); 
// } 

// function pauseAud() { 
//   aud.pause(); 
// } 
var losAudio = document.getElementById("losAudio");
var playPauseButton = document.getElementById("btn_playPause");

function losAudio_playPause() {
    var isPaused = losAudio.paused;
    losAudio[isPaused ? "play" : "pause"]();
    playPauseButton.innerHTML = '<i class="fa ' + (isPaused ? 'fa-music' : 'fa-pause') + ' bigger"></i>';
}

playPauseButton.addEventListener("click", losAudio_playPause);
