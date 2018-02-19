var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);

}

function draw() {

	//distance from center of the screen
  	fill (random(0, 100), random(200, 250), random(200, 250));
  	ellipse (x, y,40,40);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally≠
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}
