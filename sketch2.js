let img;

function preload(){
  img =loadImage("fishguts.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
} 

function draw() {
  //background(img,windowwidth, windowHeight, 0.5);
  image(img,0, 0);
}