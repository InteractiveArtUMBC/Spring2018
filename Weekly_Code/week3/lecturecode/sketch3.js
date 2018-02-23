

function setup(){
  createCanvas(600,400);
  frameRate(100); 
}
function draw(){
  squares(10,10);
  squares(30,30);
  circles(50,50);
}

function squares(x,y){
    translate(x,y);
    push();
    fill(200,100,0);
    rect(100,200,10,10);
    rect(100,100,10,10);
    pop();
}
function circles(x,y){
    translate(x,y);
    push();
    fill(200,100,0);
    ellipse(100,200,10,10);
    ellipse(100,100,10,10);
    pop();
}