
function setup(){
createCanvas(400,400);
background(60,160,197);
let stepSize=width/7;
for(let i=0;i<7;i++) {
fill(178,200,225)
ellipse(stepSize/2+i*stepSize,height/2,50,50)

}
}
