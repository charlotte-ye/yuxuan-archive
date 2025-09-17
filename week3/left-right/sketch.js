function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(220);
  stroke(180);


  noStroke();
  fill(30);
  const side = (mouseX < width/2) ? "LEFT" : "RIGHT";
  text("Cursor is on the " + side, width/2, height/2);
}
