function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
 
}

var xpos  = 410;
function draw() {
  background('#012345');
  noStroke();
  fill('#FF00FF');
  ellipse(xpos,310,80);
  fill('#654321');
  rect (0,350,450,100);
  xpos -= 2
  xpos = constrain(xpos,60,450)
}