class Engevis {
    constructor() {
        this.x = canvas.width + 100;
        this.y = random(100, canvas.height - 100);
        this.breedte = random(150, 300);
        this.lengte = random(150, 300);
        this.v = random(2, 4);
    }

    beweeg() {
        this.x -= this.v;
    }

    raakt(speler) {
        // Bepaal de hitbox van de Engevis
        var visLinks = this.x;
        var visRechts = this.x + this.breedte;
        var visBoven = this.y;
        var visOnder = this.y + this.lengte;

        // Bepaal de hitbox van de speler
        var spelerLinks = speler.x + 140;
        var spelerRechts = speler.x + 225;
        var spelerBoven = speler.y + 140;
        var spelerOnder = speler.y + 225;

        // Controleer of de hitboxen overlappen
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
        image(engevis, this.x, this.y, this.breedte, this.lengte);

        // Debugging: teken de hitbox
        noFill();
        pop();
    }
}