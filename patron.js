
var p = 50;
var c = 15;
var v = 60;
var q=150
var b= 0;
var h=10;
let t = 0; 
let t2=0;
var canvas;


function setup() {
 canvas=createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
 canvas.style('z-index',-1);
 stroke(200, 0, 0);
	 //stroke(50, 15, 50);
	strokeWeight(2);
 fill(50,15,60);
	//fill(250, 0, 0);
	frameRate(30);
}

function draw() {

 background(10, 10); 
	
	if(t2>0.5){
		q=q+20;
		if(q>=200){
		q=0+random(20);
		}
		b=b+20;
		if(b>=200){
		b=0+random(20);
			}
		h= h+20;
		if(h>=200){
		h=0+random(20);
			}
		stroke(q, b, h);
	}
	//if(millis()>3000 && millis()<5000){
		//stroke(0, 0, 255);
	//}
//	if(millis()>5000 && millis()<8000){
	//	stroke(255, 0, 255);
	//}
		
	
	if(t2>0.5) { 
	p= (p+20);
		if(p2=250){
		p=0+random(20);
		}
	c=(c+20);
		if(c>200){
		c=0+random(20);
		}
	v= (v+20) ;
		if(v>250){
		v=0+random(50);
		}
  t2=0;
		 fill(p, c, v);
	}
	
	
	//print("t2: "+t2);
	//print('colores: '+' '+c+ ' ' +v);
  
  for (let x = 0; x <= width; x = x + 30) {
  for (let y = 0; y <= height; y = y + 30) {
      
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
     
      let angle = xAngle * (x / width) + yAngle * (y / height);

    
      let myX = x + 30 * -cos(2 * PI * t + angle);
      let myY = y + 30 * sin(2 * PI * t + angle);

      rect(myX, myY, 10,10); 
    }
  }
  t2=t2+0.01;
  t = t + 0.01; 
	fill(0,0,0,200); 
	textSize(86);
	text('Erik Jongkind Rodriguez Castellanos',width/7,height/3)
	rect(width/4, height/2,width/2 , height/7);
	//rect(width/4, height/1.54,width/2 , height/7);
	fill(p,c,v);
	textSize(72);
	text('Open processing',width/2.8, height/1.7 );
}
function mousePressed() {
if(mouseX>width/4 &&  mouseX<((width/4)+(width/2)) && mouseY>height/2 && mouseY<((height/2)+(height/7))) { 
 window.open("https://www.openprocessing.org/user/129918/");
}  
}
