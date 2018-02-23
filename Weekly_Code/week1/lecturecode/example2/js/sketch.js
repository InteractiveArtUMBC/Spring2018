function setup(){
    createCanvas(400,400);

}

function draw(){
    if(mouseX>100 && mouseY< 100){
        squares();
    }
    else{
        circles();
        squares(255);
    }
}


function squares(w){
    fill(255,w,w);
    rect(40,40,40,40);
    fill(w,255,w);
    rect(10,10,40,40);
}
function circles(){
    fill(255,0,0);
    ellipse(100,40,40,40);
    fill(0,255,0);
    ellipse(200,10,40,40);
}