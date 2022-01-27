NUM_RECT = 5;

meX = 0;
meY = 0;
youX = 0;
youY = 0;
time = 0;

avals = new Array(NUM_RECT);
b = 150;
radius = 5;
rotate_amount = 0;

function setup() {
  createCanvas(500, 500);
  smooth();
  frameRate(20);
  for (var i = 0; i < NUM_RECT; i++) {
    avals[i] = 25 + i * 25;
  }
}

function draw() {
  // draw() loops forever, until stopped
  background(0);

  translate(250, 250);
  for (var i = 0; i < NUM_RECT; i++) {
    doOrbitOne(avals[i]);
    doOrbitTwo(avals[i]);

    dist = sqrt(pow(2 * youX, 2) + pow(2 * youY, 2));

    stroke(255, 215, 0);
    line(youX, youY, meX, meY);
    line(-youX, -youY, -meX, -meY);
    line(youX, youY, -meX, -meY);
    line(-youX, -youY, meX, meY);
  }

  time = (time + 0.05) % (2 * PI);
}

function doOrbitOne(a) {
  fill(204 + int(50 * sin(time)), 0, 0);
  meX = cos(time) * (a * cos(time));
  meY = (b + time) * sin(time);
}

function doOrbitTwo(a) {
  fill(180 + int(50 * sin(time)), 0, 0);
  youX = b * sin(time);
  youY = a * cos(time);
}
