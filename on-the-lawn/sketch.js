let img;
let angles = [];
let r = 6;
let stars = [];
let leftline, rightline, liney, speed = 6; 
let hit = false;
let bigstar = 0; 
let bigR1, bigR2, innerangle;

function preload() {
  img = loadImage('image1.jpg');
}

function setup() {
  createCanvas(1000, 600);
  for (let i = 0; i < 40; i++) angles[i] = i * 0.3;

  // only for image
  for (let s = 0; s < 20; s++) {
    const x = random(20, width - 20);
    const y = random(85 + 10, height - 85 - 10);
    stars.push(new Star(x, y, random(5, 12)));
  }

  leftline = 0;
  rightline = width;
  hit = false;
  bigstar = 0;
  liney = random(85 + 40, height - 85 - 40);
}

function draw() {
  image(img, 0, 0, width, height);

  // yellow block
  fill(255, 255, 153);
  noStroke();
  rect(0, 0, width, 85);
  rect(0, height - 85, width, 85);

  // wave (top)
  push();
  translate(width / 2, 42);
  fill(255);
  noStroke();
  for (let i = 0; i < angles.length; i++) {
    let x = map(i, 0, angles.length, -width / 2, width / 2);
    let y = map(sin(angles[i]), -1, 1, -25, 25);
    circle(x, y, r * 2);
    angles[i] += 0.05;
  }
  pop();

  // wave (bottom)
  push();
  translate(width / 2, height - 42);
  fill(255);
  noStroke();
  for (let i = 0; i < angles.length; i++) {
    let x = map(i, 0, angles.length - 1, -width / 2, width / 2);
    let y = map(sin(angles[i]), -1, 1, 25, -25);
    circle(x, y, r * 2);
  }
  pop();

 
  for (let s of stars) {
    s.move();
    s.show();
  }

  stroke(255);
  strokeWeight(3);
  // from left
  line(0, liney, leftline, liney);       
  // from right
  line(width, liney, rightline, liney);

  // move
  leftline += speed;
  rightline -= speed;

  // 碰撞触发
  if (!hit && leftline >= rightline) {
    hit = true;
    bigstar = 255;                       
    bigR1 = random(50, 80);
    bigR2 = bigR1 * random(0.45, 0.55);   // randombigR1 -> bigR1
    innerangle = random(TWO_PI);
  }

  // 画大星并淡出
  if (hit) {
    noStroke();                           
    fill(255, 255, 180, bigstar);         
    const cx = (leftline + rightline) * 0.5; 
    drawStar(cx, liney, bigR1, bigR2, 5, innerangle); 

    bigstar -= 5;                         
    if (bigstar <= 0) {                   
      liney = random(85 + 40, height - 85 - 40);
      leftline = 0;
      rightline = width;
      hit = false;
      bigstar = 0;
    }
  }
}

function drawStar(cx, cy, r1, r2, npoints, rotation = 0) {
  const angle = TWO_PI / npoints;   
  const halfAngle = angle / 2;
  push();
  translate(cx, cy);
  rotate(rotation);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    vertex(cos(a) * r1, sin(a) * r1);                   // 外顶点
    vertex(cos(a + halfAngle) * r2, sin(a + halfAngle) * r2); // 内凹点
  }
  endShape(CLOSE);
  pop();
}

class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alpha = random(60, 100);
    this.speed = random(0.3, 0.8);
    this.hue = random([30, 50, 70]); // random(30,50,70) -> 用数组写法
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    // only image part
    const m = this.size;
    this.x = constrain(this.x, m, width - m);
    this.y = constrain(this.y, 85 + m, height - 85 - m);
  }

  show() {
    push();
    colorMode(RGB, 255);
    noStroke();
    fill(255, 255, 180);
    this.drawStar(this.x, this.y, this.size, this.size / 2, 5);
    pop();
  }

  drawStar(x, y, radius1, radius2, npoints) {
    const angle = TWO_PI / npoints;
    const halfAngle = angle / 2;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius1;
      let sy = y + sin(a) * radius1;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius2;
      sy = y + sin(a + halfAngle) * radius2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
