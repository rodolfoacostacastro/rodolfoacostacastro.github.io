let bubble=[];

function windowResized ()  {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {

  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position (0,0);
  canvas.style ('z-index', '-1');
  
 for (let i =0; i<500; i++){
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

textSize(32);
fill(0, 102, 53, 51);
text('this', 700, 200);
//fill(0, 102, 153);
fill(0, 102, 153);
text('is not', 700, 300);
fill(0, 255, 153);
text('a chicken', 700, 400);


}
}




class Bubble {

	constructor (x,y,r){
      this.x = x;
	  this.y = y;
	  this.r = r;
	}

	move (){
		this.x = this.x + random (-1,1);
		this.y = this.y + random (-1,1);
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
}