/* I decided to approach this project as a repeating pattern, so I built out elements, put them into motifs and created tiles. I've run out of time to take the next step of turning it into a fully customizable pattern, but I believe this is a good first step */


// TODO: 
// Is there a more programmatic method to get these mesusrements?
// It took many minute adjustments to get this to work 
// And scaling the elements will break the deisgn
// I think I'm confused by rotation and origin

function setup() {
  createCanvas(400, 400);
}

class Element {
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
    // mirror motif construction
    this.offsetY = 0,
    this.offsetX = -12.3 //12.1
  }
  
  display() {
      const slice = new Element();
      
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
    this.offsetX = -24.9 //24.6
  }
  
  display() {
      const slice = new Element();
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
  rotate(PI);
  translate(0,0.1)
  motifGlide.display()
  }
}

function draw() {
  background(200);

  // TODO: Turn this into a Pattern class
  const tile = new Tile();
  translate(200,125)
  scale(5)
  tile.display()
  rotate((3*PI)/2)
  translate(-12.3, -25)
  tile.display()
  
  
}


