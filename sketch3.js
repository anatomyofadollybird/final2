let music3;
let clickArea3 = {x:0, y:0, width:1200, height:800};

function preload() {
    music = loadSound('clip5.wav');
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
  
    if (
        mouseX > clickArea3.x &&
        mouseX < clickArea3.x + clickArea3.width &&
        mouseY > clickArea3.y &&
        mouseY < clickArea3.y + clickArea3.height
    ) {
    console.log('Music Area Clicked');
    if (!music3.isPlaying() && music3.isLoaded()) {
        music3.loop();
    }
  }
  }