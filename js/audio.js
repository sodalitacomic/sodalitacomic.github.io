var blue = new Audio("/audio/soundtrack/blue.mp3");
var cyan_01 = new Audio("/audio/soundtrack/cyan_01.wav");
var cyan_02 = new Audio("/audio/soundtrack/cyan_02.wav");
var green = new Audio("/audio/soundtrack/green.wav");
var grey = new Audio("/audio/soundtrack/grey.wav");
var orange = new Audio("/audio/soundtrack/orange.wav");
var pink = new Audio("/audio/soundtrack/pink.wav");
var purple = new Audio("/audio/soundtrack/purple.wav");
var red = new Audio("/audio/soundtrack/red.wav");
var yellow = new Audio("/audio/soundtrack/yellow.wav");

var colorSoundtrack = [yellow, green, cyan_01, cyan_02, orange, red, grey, blue, pink, purple];

var soundtrack = colorSoundtrack[0];

if (pageURLNum == "ex" || pageURLNum == "02") {
  soundtrack = colorSoundtrack[0];
} else if (pageURLNum == "03" || pageURLNum == "04") {
  soundtrack = colorSoundtrack[1]
} else if (pageURLNum == "05") {
  soundtrack = colorSoundtrack[2]
} else if (pageURLNum == "06") {
  soundtrack = colorSoundtrack[3]
} else if (pageURLNum == "07") {
  soundtrack = colorSoundtrack[4]
} else if (pageURLNum == "08" || pageURLNum == "09") {
  soundtrack = colorSoundtrack[5]
} else if (pageURLNum == "10" || pageURLNum == "11") {
  soundtrack = colorSoundtrack[6]
} else if (pageURLNum == "12") {
  soundtrack = colorSoundtrack[7]
} else if (pageURLNum == "13" || pageURLNum == "14") {
  soundtrack = colorSoundtrack[8]
} else if (pageURLNum == "15" || pageURLNum == "16") {
  soundtrack = colorSoundtrack[9]
}

var isPlaying = false;

function playAudio() {
  isPlaying ? soundtrack.pause() : soundtrack.play(); 
}

soundtrack.onplaying = function() {
  isPlaying = true;
};

soundtrack.onpause = function() {
  isPlaying = false;
};