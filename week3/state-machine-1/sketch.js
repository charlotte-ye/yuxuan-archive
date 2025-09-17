let state = 0; 
const x = 50, y = 50, w = 100, h = 100;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(200);
  fill(state === 0 ? 255 : 0);
  noStroke();
  rect(x, y, w, h);
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    if (state === 0) state = 1;
  }
}
