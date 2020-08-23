---
layout: page
title: Skizze
permalink: /skizze/
tagline: "Humanity is overrated."
category: "skizze"
---
{% include image.html file="pollo.png" description="This is not a chicken" %}  
---

{% include p5.html 
p5js_sketch = "
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
};"
%}


Hola Rodolfito: Esto sí que lo puedo cambiar You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.


![Mi pollo ](/assets/images/pollo.png), ![Mi pollo ](/assets/images/pollo.png), ![Mi pollo ](/assets/images/pollo.png)
![Mi pollo ](/assets/images/pollo.png), ![Mi pollo ](/assets/images/pollo.png), ![Mi pollo ](/assets/images/pollo.png)

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/



{% include youtube.html youtube_id = "SnrEVlJH8GY"  description = "Meine Oma fährt Motorrad" %}


[This is not a link](futurevillage.org)


{% include note.html content="This is not a sample note." %}



