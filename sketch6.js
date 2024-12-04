let images = [];
let numImages = 5;
let backgroundImg;
let music6;
let clickArea6 = {x:0, y:0, width:1200, height:800};

function preload() {
    backgroundImg = loadImage("img10.png");
    music6 = loadSound('clip3.wav');
    
    for (let i = 0; i < 10; i++) {
        images.push(loadImage('img9.jpg'));
        images.push(loadImage('img24.jpg'));
        images.push(loadImage('img25.jpg'));
        images.push(loadImage('img26.jpg'));
        images.push(loadImage('img27.png'));
        images.push(loadImage('img28.png'));
        images.push(loadImage('img29.png'));
        images.push(loadImage('img31.png'));
        images.push(loadImage('img33.jpg'));
        images.push(loadImage('img34.jpg'));
        images.push(loadImage('img35.jpg'));
        images.push(loadImage('img36.png'));
        images.push(loadImage('img37.png'));
    }
}

function setup() {
    createCanvas(1200,800);
    frameRate(random(20,40));
    imageMode(CENTER);
}

function draw() {
    image(backgroundImg,0,0,1200,800);

    for (let i = 0; i < numImages; i++) {
        displayRandomImage();
    }
}

function displayRandomImage() {
    let img = random(images);
    let x = random(width);
    let y = random(height);

    image(img,x,y);
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
  
    if (
        mouseX > clickArea6.x &&
        mouseX < clickArea6.x + clickArea6.width &&
        mouseY > clickArea6.y &&
        mouseY < clickArea6.y + clickArea6.height
    ) {
    console.log('Music Area Clicked');
    if (!music6.isPlaying() && music6.isLoaded()) {
        music6.loop();
    }
  }
  }