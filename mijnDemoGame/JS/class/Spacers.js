/*  **********************************************************
    **                 BEGIN klasse Spacers                 **
    ********************************************************** */


class Spacers {
    constructor() {
    this.level = null;
    this.maxLevel = 5;
    this.actief = null;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.speler = null;
    this.vijanden = null;
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

  nieuwLevel() {
    this.level++;
    this.levelGehaald = false;
    this.speler = new Hero(this.level);
    this.vijanden = [];

    for (var v = 0; v <= this.level * 5; v++) {
        this.vijanden.push(new Vijand(this.level)); // Normale vissen
    }
    for (var e = 0; e <= this.level * 1; v++) {
      this.engevis.push(new Engevis(this.level));
    }

    // Voeg één enge vis toe per level
    this.engevis = new Engevis();
  }
  update() {
    // Beweeg de vijanden en controleer botsingen
    for (let v = 0; v < this.vijanden.length; v++) {
        this.vijanden[v].beweeg();
        if (this.vijanden[v].raakt(this.speler)) {
            this.vijanden.splice(v, 1); // Verwijder normale vis
            this.score += 1;           // Verhoog score
        }
    }

    // Beweeg de enge vis en controleer aanraking met speler
    if (this.engevis) {
        this.engevis.beweeg();
    }
    for (let e = 0; e < this.engevis.length; v++) {
      this.engevis[e].beweeg();
    }
    if (this.engevis.raakt(this.speler)) {
      this.afgelopen = true; // Stel in dat het spel voorbij is
      this.actief = false;  // Stop het spel
  }
  if (this.steigertje && this.steigertje.raakt(this.speler)) {
    this.levelGehaald = true; // Ga naar het volgende level
    if (this.level === this.maxLevel) {
        this.afgelopen = true;
        this.gewonnen = true;
    }
}

    // Update spelerbeweging
    this.speler.beweeg();

   // if (this.steigertje){
      //this.steigertje.checkAanraking(this.speler);
   // }

    // Controleer of het level is gehaald
    if (this.speler.x >= canvas.width - 100) {
        this.levelGehaald = true;
        if (this.level === this.maxLevel) {
            this.afgelopen = true;
            this.gewonnen = true;
            this.actief = false;
        }
    }
}

nieuwLevel() {
  this.level++;
  this.levelGehaald = false;
  this.speler = new Hero(this.level);
  this.vijanden = [];

  for (var v = 0; v <= this.level * 5; v++) {
      this.vijanden.push(new Vijand(this.level)); // Voeg normale vijanden toe
  }

  // Voeg een steiger toe
  this.steigertje = new Steiger();
  this.engevis = new Engevis(); // Voeg een enge vis toe
}
  tekenScorebord() {
    push();
    fill('white');
    textSize(30);
    textAlign(screenLeft,TOP);
    text('Aantal vissen gevangen:' + this.score, 20,20);
    pop();
  }
  
  tekenSpeltoestand() {
    this.speler.teken(); // Teken de speler
    for (var v = 0; v < this.vijanden.length; v++) {
        this.vijanden[v].teken(); // Teken normale vijanden
    }
    if (this.engevis) { // Als de enge vis bestaat
        this.engevis.teken(); // Teken de enge vis
    }
    if (this.steigertje) {
        this.steigertje.teken(); // Teken de steiger
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
    text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
    pop();
  }   

  eindScherm() {
    var tekst = 'Het spel is afgelopen.';
    if (this.gewonnen) {
      tekst = 'Gefeliciteerd!';
    }
    else {
        tekst += '\nHelaas: je bent af.';
    }
    push();
    fill(0);
    stroke(100,75,50,.8);
    strokeWeight(3);
    text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
    pop();
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
   // if (this.steiger) {
     // this.steiger.teken();}
  }
}



/*  **********************************************************
    **                 EINDE klasse Spacers                 **
    ********************************************************** */