function setup() {
    createCanvas(400, 400);
  }
  
  const squareSize = 50;
  
  function draw() {
    background(200);
    const circleSquare = () => {
      translate(175,175)
      noStroke();
      fill("#FFFFFF");
      rect(0,0,squareSize,squareSize);
      fill('#222222');
      ellipse(25,25,45,45);
    }
  
    const squeezeRectangle = () => {
      const rectWidth = squareSize/2;
      for(i=1; i<=7; i++){
        const squeeze = (rectWidth/i)*2.31
        translate(squeeze,0)
        // noStroke();
        fill("#ffffff");
        rect(0,0, squeeze, squareSize);
        fill('#222222');
        arc(0, 25, squeeze/1.2, 45, -PI/2, 3*-PI/2, CHORD);
      }
    }
  
    // 
    
    
    // circleSquare();
    squeezeRectangle();
  
    // for(i=0; i<10; i++){
    //   fill(255, 204, 0);
    //   ellipse((i*50), (i*50), 100, 100)
    // }
    
  }
  
  
  
  
  