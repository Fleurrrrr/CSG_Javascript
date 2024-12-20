class Engevis {
    constructor() {
        this.x = canvas.width + 20;
        this.y = random(100, canvas.height - 100);
        this.breedte = random(150, 300);
        this.lengte = random(150, 300);
        this.v = random(2, 4);
    }

    beweeg() {
        this.x -= this.v;
    }

    raakt(speler) {
        var offset = 50;
        var visLinks = this.x + offset;
        var visRechts = this.x + this.breedte - offset;
        var visBoven = this.y + offset;
        var visOnder = this.y + this.lengte - offset;

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
        image(engevis, this.x, this.y, this.breedte, this.lengte);
        pop();
    }
}