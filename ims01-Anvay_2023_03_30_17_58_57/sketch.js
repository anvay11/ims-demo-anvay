//original sketch by weidi - no code link, referred to this YouTube video: https://www.youtube.com/watch?v=me04ZrTJqWA

let img;
let cnv;
//load the image
function preload() {
  img = loadImage("assets/w2.png");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  //position canvas in center of the window
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);

  for (let col = 0; col < img.width; col += 2) {
    for (let row = 0; row < img.height; row += 2) {
      let xPos = col;
      let yPos = row;
      //get pixel data
      let c = img.get(xPos, yPos);
      push();
      //displace pixels
      translate(xPos, yPos);
      //rotate at a random angle
      rotate(radians(random(360)));
      noFill();
      strokeWeight(random(5));
      point(xPos, yPos);
      strokeWeight(random(3));
      stroke(color(c));

      //define distinct curves using sine, cosine, and random
      curve(
        xPos,
        yPos,
        sin(xPos) * random(60),
        cos(xPos) * sin(xPos) * random(90),
        random(10),
        random(80),
        cos(yPos) * sin(yPos) * random(140),
        cos(xPos) * sin(xPos) * 50
      );
      pop();
    }
  }
}
