class Nemo {
   constructor(l) {
        this.x = canvas.width - 100;
        this.y = random(100, canvas.height - 100);
        this.d = 50;
        this.v = random(2,3);
        this.kleur = 'blue';
        this.lengtevis = random(50,200);
        this.breedtevis = random(50,200);
    }
  
    beweeg() {
      this.x -= this.v;
    }
  
    raakt(speler) {
        var visLinks = this.x;
        var visRechts = this.x + this.breedtevis;
        var visBoven = this.y;
        var visOnder = this.y + this.lengtevis;
    
        var spelerLinks = speler.x + 140;
        var spelerRechts = speler.x + 225;
        var spelerBoven = speler.y + 140;
        var spelerOnder = speler.y + 225;
    
        return (
            visRechts > spelerLinks &&
            visLinks < spelerRechts &&
            visOnder > spelerBoven &&
            visBoven < spelerOnder
        );
    }
   teken() {
        push();
        noStroke();
        image(vis1, this.x, this.y, this.breedtevis, this.breedtevis); 
        pop();
    }
}
