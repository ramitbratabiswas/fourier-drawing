let time = 0;
let wave = [];
let x_shift = 300;
let n;
let input, button;
let m = 10;
let pressed = false;
let lineColor = [50, 200, 220];
let bgColor = [0, 30, 30];

function setup() {
  createCanvas(1440, 900);

  let buttonSawtooth = createButton("switch wave");
  buttonSawtooth.position(700, 700);
  buttonSawtooth.size(100, 50);
  buttonSawtooth.mouseClicked(() => {
    pressed = !pressed;
  });

  input = createInput("10");
  input.position(400, 700);

  button = createButton('submit');
  button.position(input.x + input.width + 5, input.y);
  button.mousePressed(() => {
    m = input.value();
  });
}

let centre_x = (1440 / 2) - 400;
let centre_y = 900 / 2;

let r_ = 120;

function draw() {
  bgColor = pressed ? [30, 5, 0] : [0, 30, 30];
  background(bgColor);

  stroke(255);
  noFill();
  strokeWeight(3);

  let x = centre_x;
  let y = centre_y;

  for (let i = 0; i < m; i++) {

    let px = x;
    let py = y;

    n = pressed ? 2 * i + 2 : 2 * i + 1;

    let r = r_ * (2 / (n * PI));

    x += r * cos(n * time);
    y += r * sin(n * time);

    // cycles and epicyles
    strokeWeight(r/40);
    noFill();
    circle(px, py, 2 * r);
    fill(255);
    circle(x, y, 5, wave[0]);
    
    line(x, y, px, py);

  }

  strokeWeight(2);

  // horizontal line from last point
  line(x, y, centre_x + x_shift, wave[0]);

  // vertical axis
  line(centre_x + x_shift, centre_y - 200,
  centre_x + x_shift, centre_y + 200);

  // horizontal axis
  line(centre_x + x_shift, centre_y, centre_x + x_shift + 640, centre_y);

  // gridlines
  strokeWeight(2);
  stroke(255, 50);
  for (let i = -3; i < 4; i++) {
    line(centre_x + x_shift, centre_y + i*60, centre_x + x_shift + 640, centre_y + i*60);
  }
  for (let i = 0; i < 11; i++) {
    line(centre_x + x_shift + i*60, centre_y - 200, centre_x + x_shift + i*60, centre_y + 200);
  }

  wave.unshift(y);

  lineColor = pressed ? [220, 80, 40] : [50, 200, 220];

  fill(lineColor);
  stroke(lineColor);
  strokeWeight(3);
  circle(centre_x + x_shift, y, r_/10, wave[0]);

  beginShape();
  noFill();
  strokeWeight(2);
  for (let i = 0; i < wave.length; i++) {
    vertex(centre_x + x_shift + i, wave[i]);
  }
  endShape();

  time -= 1/(8*PI);

  if (wave.length > 600) {
    wave.pop();
  }
}

function switchToSawtooth() {
  console.log("clicked");
  n = 2*i + 2; 
}