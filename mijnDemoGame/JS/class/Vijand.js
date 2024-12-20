class Vijand {
   constructor(l) {
        this.x = canvas.width - 100;
        this.y = random(100, canvas.height - 100);
        this.d = 50; // Diameter voor eventuele botsing
        this.v = 2; // Snelheid, kun je aanpassen
        this.kleur = 'blue';
        this.lengtevis = random(50,200); // Willekeurige lengte voor deze vis
        this.breedtevis = random(50,200); // Willekeurige breedte voor deze vis
    }
  
    beweeg() {
      this.x -= this.v;
    }
  
    raakt(speler) {
        // Rechthoek van de vis
        var visLinks = this.x;
        var visRechts = this.x + this.breedtevis; // Dynamisch op basis van breedtevis
        var visBoven = this.y;
        var visOnder = this.y + this.lengtevis; // Dynamisch op basis van lengtevis
    
        // Rechthoek van de Hero (bootje)
        var spelerLinks = speler.x + 140; // Verplaats hitbox naar binnen
        var spelerRechts = speler.x + 225; // Verplaats hitbox naar binnen
        var spelerBoven = speler.y + 140; // Verplaats hitbox naar binnen
        var spelerOnder = speler.y + 225; // Verplaats hitbox naar binnen
    
        // Check of de hitboxen van de vis en de Hero elkaar raken
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
