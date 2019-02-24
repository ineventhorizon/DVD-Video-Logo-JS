
var x,y;
var xspeed,yspeed;
let dvd;

var r,g,b;


function preload() {
  dvd = loadImage('dvd.png');
}
function setup() {
    createCanvas(1280, 720);
    x=random(width);
    y=random(height);
    xspeed=5;
    yspeed=5;
    changeColor();
}

function draw() {
    background(0);
    image(dvd,x,y);
    tint(r,g,b);

	
	x+=xspeed;
	y+=yspeed;
	
	
	if(x+dvd.width>=width){
        xspeed=xspeed*(-1);
        x=width-dvd.width;
        changeColor();
    }else if(x<=0){
        xspeed=xspeed*(-1);
        x=0;
        changeColor();
    } 
	if(y+dvd.height>=height){
        yspeed=yspeed*(-1);
        y=height-dvd.height;
        changeColor();
    }else if(y<=0){
        yspeed=yspeed*(-1);
        y=0;
        changeColor();
    }
}

function changeColor(){
    r=random(100,255);
    g=random(100,255);
    b=random(100,255);
}