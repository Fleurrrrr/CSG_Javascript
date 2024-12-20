class Schipahoy {
    constructor() {
    this.level = null;
    this.maxLevel = 5;
    this.actief = null;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.speler = null;
    this.visjes = null;
    this.score = 0;
    
      }
  
  nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.gewonnen = false;
    this.afgelopen = false;
    this.score = 0;
    this.nieuwLevel();
  }
  update() {
    for (var v = 0; v < this.visjes.length; v++) {
        this.visjes[v].beweeg();
        if (this.visjes[v].raakt(this.speler)) {
            this.visjes.splice(v, 1);
            this.score += 1;         
        }
    }

    if (this.engevis) {
        this.engevis.beweeg();
    }
    for (var e = 0; e < this.engevis.length; e++) {
      this.engevis[e].beweeg();
    }
    if (this.engevis.raakt(this.speler)) {
      this.afgelopen = true;
      this.actief = false;
  }
  if (this.steigertje && this.steigertje.raakt(this.speler)) {
    this.levelGehaald = true;
    if (this.level === this.maxLevel) {
        this.afgelopen = true;
        this.gewonnen = true;
        this.actief = false;
    }

}

    this.speler.beweeg();


  }

nieuwLevel() {
  this.level++;
  this.levelGehaald = false;
  this.speler = new Schip(this.level);
  this.visjes = [];

  for (var v = 0; v <= this.level * 5; v++) {
      this.visjes.push(new Nemo(this.level)); 
  }

  this.steigertje = new Steiger();
  this.engevis = new Engevis();
}
  tekenScorebord() {
    push();
    fill('white');
    textSize(30);
    textAlign(screenLeft,TOP);
    text(this.score, 270,50);
    image(vis1,250,50,100,100);
    pop();
  }
  
  tekenSpeltoestand() {
    this.speler.teken();
    for (var v = 0; v < this.visjes.length; v++) {
        this.visjes[v].teken();
    }
    if (this.engevis) { 
        this.engevis.teken();
    }
    if (this.steigertje) {
        this.steigertje.teken();
    }
}
  beginScherm() {
    push();
    noFill();
    image(welkom,0,0,canvas.width,canvas.height);
    pop();
  }

  levelScherm() {
    push();
    fill(50,80,80,.5);
    stroke(150,200,255,.7);
    strokeWeight(3);
    text('Arr!\n Een goede vangst in level '+this.level+'!\n\n We dragen al '+this.score+' stuks vis mee! \n Op het eiland van de boer verkopen we dit voor maar liefst '+this.score*3+' muntstukken!! \n\n Daar verderop zijn nog meer vissen! Druk op ENTER en ga snel naar level '+(this.level+1)+'!',0,0,canvas.width,canvas.height / 2);
    pop();
  }   

  eindScherm() {
    if (this.gewonnen) {
        image(eiland, 2, 2, windowWidth, windowHeight);
    } else {
        image(jebentaf, 0, 0, windowWidth, windowHeight);
    }
  }
  teken() {
    background(115,194,251);
    if (!this.actief) {
        if (this.afgelopen) {
            this.eindScherm();
        }
        else {
            this.beginScherm();
        }
    }
    else {
        if (this.levelGehaald) {
            this.levelScherm();
        }
        else {
            this.tekenScorebord();
            this.tekenSpeltoestand();
        }
    }
  }
}