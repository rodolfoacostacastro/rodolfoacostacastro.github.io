
let bubble=[];

function setup() {
 createCanvas(windowWidth, windowHeight);
 for (let i =0; i<1000; i++){
	  let x = random (width);
	  let y = random (height);
	  let r = random (10,30);
	bubble[i] = new Bubble (x,y,r);
 }
 
}

function draw() {
background(218, 160, 221);
for (let i =0; i<bubble.length; i++){
bubble[i].show();
bubble[i].move();
}


}

class Bubble {

	constructor (x,y,r){
      this.x = x;
	  this.y = y;
	  this.r = r;
	}

	move (){
		this.x = this.x + random (-1,1.5);
		this.y = this.y + random (-1,1.5);
	 }
	 
	 show () {
		 stroke (255);
		 fill (pink.r,pink.g,pink.b);
		 ellipse (this.x, this.y, this.r*2);
	 }
}

var pink = {
	r: 250,
	g: 200,
	b: 200
};