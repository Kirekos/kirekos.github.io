
let t = 0; 
var canvas;

function setup() {
 canvas=createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
 canvas.style('z-index',-1);
 stroke(250, 0, 0);
	 //stroke(50, 15, 50);
	strokeWeight(2);
  fill(150, 15, 50);
	//fill(250, 0, 0);
}

function draw() {
 background(10, 10); 

  
  for (let x = 0; x <= width; x = x + 30) {
  for (let y = 0; y <= height; y = y + 30) {
      
      let xAngle = map(mouseX, 0, width, -2 * PI, 2 * PI, true);
      let yAngle = map(mouseY, 0, height, -2 * PI, 2 * PI, true);
     
      let angle = xAngle * (x / width) + yAngle * (y / height);

    
      let myX = x + 30 * cos(2 * PI * t + angle);
      let myY = y + 30 * sin(2 * PI * t + angle);

      rect(myX, myY, 10,10); 
    }
  }

  t = t + 0.01; 
}
