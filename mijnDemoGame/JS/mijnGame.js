var welkom;
var bootje1;
var vis1;
var lengtevis1;
var breedtevis1; 
var x;
var y;
var engevis;
var steigertje;
var breedtesteigertje
var lengtesteigertje

function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-groovyhiphop.mp3");
    welkom = loadImage("images/welkom.png");
    bootje1 = loadImage("images/Beginbootje.png");
    vis1 = loadImage("images/vis1.png");
    engevis= loadImage("images/Engevis.png");
    steigertje = loadImage("images/steigertje.png");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //lengtevis1 = random(100, 400);
    //breedtevis1 = random(100, 400);
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(50);
    spel = new Spacers();
    spel.nieuwSpel();
    hero = new Hero()
}

function draw() {
    if (spel.actief && !spel.levelGehaald) {
        spel.update();
     }
      spel.teken();
}

function keyTyped() {
  if (!spel.actief && !spel.levelGehaald) {
    // begin spel
    spel.actief = true;
    achtergrondmuziek.loop();
  }
  if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
  }
  if ((spel.afgelopen) && keyCode == 32) {
    // einde spel => 32 = ENTER 
    achtergrondmuziek.stop();
    spel.nieuwSpel();
  }  
}