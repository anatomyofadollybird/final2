let images = [];
let numImages = 1;
let backgroundImg;
let music4;
let clickArea4 = {x:0, y:0, width:1200, height:800};

function preload() {
    backgroundImg = loadImage("collage.jpg");
    
    for (let i = 0; i < 10; i++) {
        images.push(loadImage('img1.png'));
        images.push(loadImage('img2.png'));
        images.push(loadImage('img3.png'));
        images.push(loadImage('img4.png'));
        images.push(loadImage('img5.png'));
        images.push(loadImage('img6.png'));
        images.push(loadImage('img7.png'));
        images.push(loadImage('img8.jpg'));
        images.push(loadImage('img13.png'));
        images.push(loadImage('img14.png'));
        images.push(loadImage('img15.png'));
        images.push(loadImage('img16.png'));
        images.push(loadImage('img19.png'));
    }

    music4 = loadSound('clip7.wav');
}

function setup() {
    createCanvas(1200,800);
    frameRate(15);
    imageMode(CENTER);
}

function draw() {
    image(backgroundImg,width/2,height/2,1200,800);

    for (let i = 0; i < numImages; i++) {
        displayRandomImage();
    }
}

function displayRandomImage() {
    let img = random(images);

    image(img,550,690,800,90);
}

console.log('Music Loaded', music4.isLoaded());

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }

    if (
        mouseX > clickArea4.x &&
        mouseX < clickArea4.x + clickArea4.width &&
        mouseY > clickArea4.y &&
        mouseY < clickArea4.y + clickArea4.height
    ) {
    console.log('Music Area Clicked');
    if (!music4.isPlaying() && music4.isLoaded()) {
        music4.loop();
    }
  }
}