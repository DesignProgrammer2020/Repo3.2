class Butterflies{

constructor(x, y) {
  this.x = x;
  this.y = y;
  //scale the butterflies to a random size
  this.s = random(0.5, 2);
}

move(x, y) {
  //make butterflies move horizontally
  this.y += 1;
  if (this.y >= windowHeight) {
    this.y = this.y - windowHeight;
  }
  console.log(`This.y = ${this.y}`);
}

display() {
  push();
  scale(this.s);
  translate(this.x, this.y);

  //butterfly anttenae
  stroke(0);
  strokeWeight(1);
  line(110, 150, 120, 175);
  line(130, 150, 120, 175);

  //wings
  noStroke();
  fill(random(128, 255), random(128, 255), random(128, 255));
  triangle(90, 150, 130, 180, 100, 200);
  triangle(150, 150, 110, 180, 140, 200);
  pop();
  }
}
