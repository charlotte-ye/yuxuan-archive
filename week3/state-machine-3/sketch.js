let state = 0;      
let count = 0;    
const needs = [3, 2]; 
const x = 50, y = 50, w = 100, h = 100;

function setup() {
  createCanvas(220, 220);
  textAlign(CENTER, CENTER);
  textSize(14);
}

function draw() {
  background(200);
  fill(state === 0 ? 255 : 0);
  rect(x, y, w, h);

  fill(40);
  text("Clicks left: " + (needs[state] - count), width/2, 190);
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    count++;
    if (count >= needs[state]) {
      state = 1 - state;
      count = 0;
    }
  }
}
