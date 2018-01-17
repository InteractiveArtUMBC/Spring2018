function setup(){
    createCanvas(400,400);

}
function draw(){
    squares();
    circles();
}
function squares(){
    fill(255,0,0);
    rect(40,40,40,40);
    fill(0,255,0);
    rect(10,10,40,40);
}
function circles(){
    fill(255,0,0);
    ellipse(100,40,40,40);
    fill(0,255,0);
    ellipse(200,10,40,40);
}