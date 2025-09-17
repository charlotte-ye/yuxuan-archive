let r,g,b;
function setup() {
  createCanvas(500, 500);
  background(170,180,200);
}
function draw() {
let r=map(mouseX,0,width,0,255)
let size = map(mouseX, 0, width, 5, 50);
ellipse(mouseX, mouseY, size, size);



fill(r,map(mouseY, 0, width, 0, 255),150);

noStroke();
ellipse(mouseX,mouseY,size,size);

fill(255);
textSize(30);
//text(mouseX,mouseX,mouseY);

}