
let t = 0; 
var canvas;

function setup() {
 canvas=createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
 canvas.style('z-index',-1);
 noStroke();
 fill(250, 20, 20);
}

function draw() {
 background(10,10); 

  
  for (let x = 0; x <= width; x = x + 30) {
  for (let y = 0; y <= height; y = y + 30) {
      
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
     
      let angle = xAngle * (x / width) + yAngle * (y / height);

    
      let myX = x + 20 * cos(2 * PI * t + angle);
      let myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); 
    }
  }

  t = t + 0.01; 
}

