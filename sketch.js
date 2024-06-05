let time = 0;
let wave = [];
let x_shift = 300;

function setup() {
  createCanvas(1440, 900);
}

let centre_x = (1440 / 2) - 400;
let centre_y = 900 / 2;

let r_ = 100;

function draw() {
  background(0);

  stroke(255);
  noFill();
  strokeWeight(3);

  // circle(centre_x, centre_y, 2 * r_);

  let x = centre_x;
  let y = centre_y;

  for (let i = 0; i < 10; i++) {

    let px = x;
    let py = y;

    let n = 2 * i + 1;

    let r = r_ * (4 / (n * PI));

    x += r * cos(n * time);
    y += r * sin(n * time);

    // cycles and epicyles
    strokeWeight(r/50);
    noFill();
    circle(px, py, 2 * r);
    fill(255);
    circle(x, y, 5, wave[0]);
    
    strokeWeight(3);
    line(x, y, px, py);

  }

  strokeWeight(3);

  // horizontal line from last point
  line(x, y, centre_x + x_shift, wave[0]);

  // vertical axis
  line(centre_x + x_shift, displayHeight / 2 - 2 * r_,
  centre_x + x_shift, displayHeight / 2 + 2 * r_);

  // horizontal axis
  line(centre_x + x_shift, centre_y, centre_x + x_shift + 640, centre_y);

  wave.unshift(y);

  fill(50, 200, 220);
  stroke(50, 200, 220);
  strokeWeight(5);
  circle(centre_x + x_shift, y, r_/10, wave[0]);

  beginShape();
  noFill();
  strokeWeight(2);
  for (let i = 0; i < wave.length; i++) {
    vertex(centre_x + x_shift + i, wave[i]);
  }
  endShape();

  time -= 0.05;

  if (wave.length > 600) {
    wave.pop();
  }
}
