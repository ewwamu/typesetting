let colors = [];
let color1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colors = [
    "tomato",
    "darkorange",
    "gold",
    "chartreuse",
    "skyblue",
    "magenta",
  ];
  
  color1 = random(colors);
}

function draw() {
  background(30);

  textSize(28);
  textFont("Arial");
  fill(color1);
  noStroke();

  let messageOne = "currents:typesetting!";
  let messageTwo = "currents:typesetting!";
  let messageThree = "currents:typesetting!";

  let spacing = 30;

  for (let i = 0; i < messageOne.length; i++) {
    let x = 50 + i * spacing;
    let y = 50 + sin(frameCount * 0.15 + i) * 20;
    text(messageOne.charAt(i), x, y);
  }
  
    for (let i = 0; i < messageTwo.length; i++) {
    let x = 50 + i * spacing;
    let y = 250 + tan(frameCount * 0.09 + i) * 15;
    // fill(currentColor);
    text(messageTwo.charAt(i), x, y);
  }
  
    for (let i = 0; i < messageThree.length; i++) {
    let x = 50 + i * spacing;
    let y = 450 + cos(frameCount * 0.15 + i) * 20;
    // fill(currentColor);
    text(messageThree.charAt(i), x, y);
  }
}

function mousePressed() {
	color1 = color(random(colors));
}