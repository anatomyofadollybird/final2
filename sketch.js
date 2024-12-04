
let molds = []; let num = 20000;
let d; 
let music1;
let clickArea1 = {x:0, y:0, width:1200, height:800};


function preload() {
  music1 = loadSound('clip4.wav');
}
function setup() {
    describe('Video capture from the device webcam');
    filter(INVERT);

  

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  d = pixelDensity();
  
  for (let i=0; i<num; i++) {
    molds[i] = new Mold();
  } 
 background(255);
}

function draw() {
  background(0, 5);
  loadPixels();
  
  for (let i=0; i<num; i++) {
    if (key == "s") { // If "s" key is pressed, molds stop moving 
      molds[i].stop = true;
      updatePixels();
      noLoop();
    } else {
      molds[i].stop = false;
    }
    
    molds[i].update();
    molds[i].display();
  }
}

function mousePressed() {
  if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
  }

  if (
      mouseX > clickArea1.x &&
      mouseX < clickArea1.x + clickArea1.width &&
      mouseY > clickArea1.y &&
      mouseY < clickArea1.y + clickArea1.height
  ) {
  console.log('Music Area Clicked');
  if (!music1.isPlaying() && music1.isLoaded()) {
      music1.loop();
  }
}
}
