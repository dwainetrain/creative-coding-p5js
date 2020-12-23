function setup() {
  createCanvas(400, 400);
}

class Piece {
  constructor(){
    // arc construction
    this.x = 0,
    this.y = 0,
    this.w = 25,
    this.h = 25,
    this.start = PI,
    this.stop = -PI/2,
    this.mode = PIE
    this.fill = 51;
  }

  
  display() {
    noStroke();
    fill(this.fill);
    arc(this.x, this.y, this.w, this.h, this.start, this.stop, this.mode)
  }
}

class MotifMirror {
  constructor(){
    // motif construction
    this.offsetY = 0,
    this.offsetX = -12
  }
  
  display() {
      const slice = new Piece();
      
      slice.display();
      rotate(PI/2)
      translate(this.offsetY, this.offsetX);
      slice.display();
  }
}

class MotifGlide {
  constructor(){
    // Glid motif construction
    this.offsetY = 0,
    this.offsetX = -24.6
  }
  
  display() {
      const slice = new Piece();
      slice.display();
      translate(this.offsetY, this.offsetX);
      slice.display();
  }
}

class Tile {
  constructor(){
    // motif construction
    this.copies = 2,
    this.offsetX = 50,
    this.offsetY = 0
  }

  
  display() {
    const motifMirror = new MotifMirror()
  const motifGlide = new MotifGlide()
  motifMirror.display()
  // push();
  rotate(PI);
  translate(0,0.2)
  motifGlide.display()
  // pop();
  }
}

function draw() {
  background(200);

  const tile = new Tile();
  translate(100,100)
  scale(4)
  tile.display()
  rotate((3*PI)/2)
  translate(-12, -25)
  tile.display()
  
  
}


