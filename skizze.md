---
layout: page
title: Sketches
permalink: /sketches/
tagline: "some code weirdness"
category: "skizze"
---
 
{% include p5js_libs.html 
%}


<script src="{{ site.baseurl }}{% link assets/js/p5_bubbles_sketch_small.js %}"> </script> 

{% include cuboDePollo.html 
%}
<br><br><br><br><br><br><br><br><br><br><br><br>
<br>

<p> 


In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

</p>

[Lorem_ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum)


<p> 

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.
</p>

<p> 

{% include image.html file="pollo.png" %} {% include image.html file="pollo.png"  %} {% include image.html file="pollo.png"  %} </p>

<p> 
![Mi pollo](/assets/images/pollo.png), ![Mi pollo](/assets/images/pollo.png), ![Mi pollo](/assets/images/pollo.png)
![Mi pollo](/assets/images/pollo.png), ![Mi pollo](/assets/images/pollo.png), ![Mi pollo](/assets/images/pollo.png) </p>


Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(YourName)
  puts "Hi, #{YourName}"
end
print_hi('againYourName')
#=> prints 'Hola, buenos días, againYourPersonalName' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

{% include image.html file="pollo.png" description="This is not a chicken" %} 

{% include youtube.html youtube_id = "SnrEVlJH8GY"  description = "Meine Oma fährt Motorrad" %}


[This is not a link](futurevillage.org)


{% include note.html content="This is not a sample note." %}



