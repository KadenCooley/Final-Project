// BOMB GAME



// starting position variables
let charX = 50
let charY = 200

// character axial movement speed
let charSpeed = 5

//character hitbox radius
let charBox = 25



function setup() {
  
  createCanvas(800, 800);
  
  
  frameRate(60);
}


  
function draw() {
  
  
  // BACKDROP
  
  background(220);
  
  // BACKDROP
  
  
    // MOVEMENT CODE
  
  // if W go up
  if (keyIsDown(87) && (charY > charBox))  {
      charY = (charY - charSpeed);
  }
  // if A go left
  if (keyIsDown(65) && (charX > charBox)) {
      charX = (charX - charSpeed);
  }
  // if S go down
  if (keyIsDown(83) && (charY < (height - charBox))) {
      charY = (charY + charSpeed);
  }
  // if D go right
  if (keyIsDown(68) && (charX < (width - charBox))) {
      charX = (charX + charSpeed);
  }  
  
    // MOVEMENT CODE
  
  
    // DRAW CHARACTER
  
  fill(0);
  circle(charX, charY, 50);
  
    // DRAW CHARACTER
}
