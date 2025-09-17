let state = 0; // 白黑
const x = 50, y = 50, w = 100, h = 100;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(200);
  fill(state === 0 ? 255 : 0);
  rect(x, y, w, h);
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    state = 1 - state; 
  }
}
