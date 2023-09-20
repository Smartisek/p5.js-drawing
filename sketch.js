function setup() {
  createCanvas(1000, 1000);
  background(220);
}

function draw() {
}

function mouseDragged(){
  noStroke();
  fill(random(0,220),60,140);
  rect(mouseX-25,mouseY-25, 50,50);
}
