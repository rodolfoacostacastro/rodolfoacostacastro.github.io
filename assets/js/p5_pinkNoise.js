//Rodolfo Acosta Castro
// P5.js Shader 
//inspired by Pierre MARZIN. Check his stuff out here https://www.openprocessing.org/user/19666

var program;
var canvas;
//var altura;

function setup() {
 pixelDensity(1);
 canvas =  createCanvas(windowWidth, windowHeight,WEBGL);

 
  //gl=this.canvas.getContext('webgl');
 
  canvas.position (0,0); 
//  canvas.position (0,800); 
  canvas.style ('z-index', '-1'); 

	rectMode(CENTER);
  noStroke();
  fill(1);
  program = createShader(vert,frag);
	}

function draw() {

  shader(program);
  background(0);
	program.setUniform('u_resolution',[width,height]);
	program.setUniform('u_time',millis()/1000.0);
  rect(0,0,width,height);

}




function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
var vert=`
#ifdef GL_ES
      precision highp float;
      precision highp int;
    #endif
		#extension GL_OES_standard_derivatives : enable

    // attributes, in
    attribute vec3 aPosition;


    void main() {
      // Copy the position data into a vec4, adding 1.0 as the w parameter
      vec4 positionVec4 = vec4(aPosition, 1.0);
    
      // Scale to make the output fit the canvas
      positionVec4.xy = positionVec4.xy * 2.0 - 1.0; 
    
      // Send the vertex information on to the fragment shader
      gl_Position = positionVec4;
    }
`;
var frag=`
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 5

float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy*3.;
    // st += st * abs(sin(u_time*0.1)*3.0);
    vec3 color = vec3(0.0);

    vec2 q = vec2(0.);
    q.x = fbm( st + 0.00*u_time);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);

    float f = fbm(st+r);

    color = mix(vec3(0.01961,0.519608,0.966667),
                vec3(0.866667,0.66667,0.498039),
                clamp((f*f)*4.0,0.0,1.0));

    color = mix(color,
                vec3(0.69,0.05,0.464706),
                clamp(length(q),0.0,1.0));

    color = mix(color,
                vec3(0.9966667,1.,1.),
                clamp(length(r.x),0.0,1.0));

  //  gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
  
gl_FragColor = vec4(color,1.);
  gl_FragColor = vec4(gl_FragColor.xyz, 1.);
}

`
