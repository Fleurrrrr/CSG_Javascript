class Steiger {
    constructor() {
         this.x = canvas.width - 100;
         this.y = canvas.height - 100;
        // this.kleur = 'blue';
         this.lengtesteigertje = 100;
         this.breedtesteigertje = 200;
     }
   
     raakt(speler) {
         var steigertjeLinks = this.x;
         var steigertjeRechts = this.x + this.breedtesteigertje;
         var steigertjeBoven = this.y;
         var steigertjeOnder = this.y + this.lengtesteigertje;
     
         var spelerLinks = speler.x + 140;
         var spelerRechts = speler.x + 225;
         var spelerBoven = speler.y + 140;
         var spelerOnder = speler.y + 225;
     
         return (
             steigertjeRechts > spelerLinks &&
             steigertjeLinks < spelerRechts &&
             steigertjeOnder > spelerBoven &&
             steigertjeBoven < spelerOnder
         );
     }
    teken() {
         push();
         noStroke();
         image(steigertje, this.x, this.y, this.breedtesteigertje, this.breedtesteigertje);
         pop();
     }
 }