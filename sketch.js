let time = 0;
let wave = [];
let x_shift = 300;

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(0);
  
  let r = 100;
  
  stroke(255);
  noFill();
  strokeWeight(5);

  let centre = {
    x: displayWidth/2 - 400,
    y: displayHeight/2
  }

  circle(centre.x, centre.y, 2*r);

  let boundary = {
    x: r*cos(time) + centre.x,
    y: r*sin(time) + centre.y
  }

  wave.unshift(boundary.y);

  line(centre.x, centre.y, boundary.x, boundary.y);
  fill(255);
  circle(boundary.x, boundary.y, 20, wave[0]);

  line(boundary.x, boundary.y, boundary.x + x_shift - r*cos(time), wave[0]);

  strokeWeight(2);
  line(boundary.x + x_shift - r*cos(time), displayHeight/2 - 2*r,
   boundary.x + x_shift - r*cos(time), displayHeight/2 + 2*r);

  fill(100,50,200);
  stroke(100,50,200);
  strokeWeight(5);
  circle(boundary.x + x_shift - r*cos(time), boundary.y, 20, wave[0]);

  beginShape();
  for (let i = 0; i < wave.length; i++) {
    point(boundary.x + x_shift - r*cos(time) + i, wave[i]);
  }
  endShape();

  time += 0.01;
}
