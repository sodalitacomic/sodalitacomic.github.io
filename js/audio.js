var audio = new Audio("/audio/soundtrack/roxo.wav");

var isPlaying = false;

function playAudio() {
  isPlaying ? audio.pause() : audio.play(); 
}

audio.onplaying = function() {
  isPlaying = true;
};

audio.onpause = function() {
  isPlaying = false;
};