let paused = false; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

}

function draw() {
  if (paused) return;   

  let r = random(150, 230);
  let g = random(150, 230);
  let b = random(150, 230);

  fill(r, g, b, 120);
  ellipse(random(width), random(height), 8, 8);
}


function mousePressed() {
  paused = !paused;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
