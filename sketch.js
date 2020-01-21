var angle
var slider
var secslider
var stop

function setup() { 
  createCanvas(700, 500);
  slider = createSlider(0,PI, PI / 4, 0.01)
  secslider = createSlider(2,150,10,1)
  secslider.position(305, height);
  slider.position(10, height);
  
} 

function draw() { 
  background(230);
  textSize(25);
  text("Tree Fractal |Peter Tsiompanis|", width/4, 30)
  textSize(15);
  text("angle of branches",20, height-15);
  text("Fractal Length",325, height-15);
  angle = slider.value();
  stop = secslider.value();
  translate(width/2, height-75);
  branch(90);
  
}

function branch(len) {
	line(0, 0, 0, -len);
  translate(0, -len);
  if (len > stop) {
  push();
  rotate(angle);
  branch(len * 0.75)
  pop();
  push();
  rotate(-angle);
  branch(len * 0.75)
  pop();  
  }
}
