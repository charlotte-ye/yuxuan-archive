const res = 40;
const noiseScale = 0.002;
const noiseSpeed = 0.02;

let col1, col2;
function setup() {
  const c = createCanvas(windowWidth, windowHeight);

  c.style('position', 'fixed');
  c.style('top', '0');
  c.style('left', '0');
  c.style('z-index', '-1');          
  c.style('pointer-events', 'none');
  noStroke();
  col1 = color('#3BBFDA');
  col2 = color('#99FFCC');
}



function draw() {
  background(255);
  const xd = width / res;
  const yd = height / res;

  for (let x = 0; x < width; x += xd) {
    for (let y = 0; y < height; y += yd) {
      const n = noise(x * noiseScale, y * noiseScale, frameCount * noiseSpeed);
      fill(lerpColor(col1, col2, n));
      rect(x, y, xd, yd);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}
