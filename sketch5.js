let music5;
let clickArea5 = {x: 0, y: 0, width: 1200, height: 800};
let backgroundImg5;

function preload() {
  backgroundImg5 = loadImage("FINALpage 5.jpg");
  music5 = loadSound('clip2.wav');
}

function setup() {
  createCanvas(1200, 800);
  imageMode(CENTER);
  
  // Initially ensure audio context is resumed after the user gesture
  userInteracted = false;  // Flag to track if user interaction has occurred
}

function draw() {
  image(backgroundImg5, width / 2, height / 2, 1200, 800);
}

function mousePressed() {
  // Resume AudioContext only on the first click, after user interaction
  if (!userInteracted) {
    getAudioContext().resume();  // Resume the AudioContext
    console.log('AudioContext resumed after user interaction');
    userInteracted = true;  // Set the flag after first user interaction
  }
  
  // Check if the mouse is within the click area to start playing the music
  if (
    mouseX > clickArea5.x &&
    mouseX < clickArea5.x + clickArea5.width &&
    mouseY > clickArea5.y &&
    mouseY < clickArea5.y + clickArea5.height
  ) {
    console.log('Music Area Clicked');
    
    // Ensure the sound is loaded and not already playing, then start looping
    if (music5.isLoaded() && !music5.isPlaying()) {
      music5.loop();
      console.log('Music started');
    }
  }
}
