var x = 100;


function setup(){
  createCanvas(600,400);
  frameRate(100); 
}
function draw(){
    background(0);
    x+=50;
    x = x + 50;
 if(x > width-50){
    x = 0;
 }
 

  stroke(90);
  //trokeWeight(1);
  fill(x,0,255);
// rectMode(CENTER);
  rect(x,100,50,50);
  fill(255,0,255);
  rect(100,100,40,40);
}