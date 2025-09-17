let x, y;

function setup() {
  createCanvas(500, 500);
  background(20);
  stroke(255);
  x = width / 2;
  y = height / 2;
}

function draw() {
  
  point(x, y);

  // 随机上下左右走
  const r = floor(random(4));
  if (r === 0) x++;
  else if (r === 1) x--;
  else if (r === 2) y++;
  else y--;

  // canvas range
  x = constrain(x, 0, width - 1);
  y = constrain(y, 0, height - 1);
}

