// BOMB GAME


// Time
let gameTime = 0;
let timeStart = 0;

// HP bar
let HP = 100;

// starting position variables
let charX = 400;
let charY = 400;
let startX = 300;
let startY = 350;

// character axial movement speed
let charSpeed = 5;

// character hitbox radius
let charBox = 25;

// The number of bombs to create
const numBombs = 10;

// The speed and direction of each bomb
const bombSpeed = 1;
const bombDirection = {
  x: 1,
  y: 1,
};

// An array to store the bombs
let bombs = [];


function setup() {

  createCanvas(800, 800);

  frameRate(60);
  
  
  // Initialize the array of bombs
for (let i = 0; i < numBombs; i++) {
  // Add x and y direction variables to each bomb object
  bombs.push({
    x: random(width),
    y: random(height),
    xDirection: 1,
    yDirection: 1,
  });
}

// creating button
let button;  

button = createButton('START!');
button.position(300,350);
button.size(200, 100);
button.mousePressed(startGame);

// make the text on the button larger
button.style('font-size', '50px');

// make the button green
button.style('background-color', 'green');
  
// make the corners of the button round
button.style('border-radius', '30px');

function startGame(){
  timeStart = 1;
  button.remove()
  }
}


function draw() {


  // BACKDROP
  
  background('#183D3A');
  fill('#15D6C3');
  rect(10, 80, (width - 20), (height - 100), 25);
  
  // BACKDROP

  // GAME CLOCK

  stroke(0);
  textSize(20);
  
  let seconds = floor(gameTime);  // total number of seconds that have elapsed
  let minutes = floor(seconds / 60);  // total number of minutes that have elapsed
  let remainingSeconds = seconds % 60;  // number of seconds past the last whole minute
  let tenthsOfSeconds = nf((gameTime - seconds) * 10, 1);  // tenths of seconds
  
// display the game time in minutes, seconds, and tenths of seconds
text(minutes + ":" + nf(remainingSeconds, 2) + "." + round(tenthsOfSeconds), 40, 73);

  // GAME CLOCK


    // MOVEMENT CODE
if (timeStart === 1){
  // if W go up
  if (keyIsDown(87) && (charY > (charBox + 80)))  {
      charY = (charY - charSpeed);
  }
  // if A go left
  if (keyIsDown(65) && (charX > (charBox + 10))) {
      charX = (charX - charSpeed);
  }
  // if S go down
  if (keyIsDown(83) && (charY < (height - (charBox + 20)))) {
      charY = (charY + charSpeed);
  }
  // if D go right
  if (keyIsDown(68) && (charX < (width - (charBox + 10)))) {
      charX = (charX + charSpeed);
  }
}
    // MOVEMENT CODE

    // BOMBS
  
  if (timeStart === 1){
  
   // Update each bomb's position and check for collisions with the edges of the canvas
  for (let i = 0; i < numBombs; i++) {
    const bomb = bombs[i];

    // Update the bomb's position
    bomb.x += bombSpeed * bombDirection.x;
    bomb.y += bombSpeed * bombDirection.y;

   for (let i = 0; i < numBombs; i++) {
  const bomb = bombs[i];

  // Update the bomb's position
  bomb.x += bombSpeed * bomb.xDirection;
  bomb.y += bombSpeed * bomb.yDirection;

  // Check for collisions with the edges of the canvas
  if (bomb.x < 25 || bomb.x > (height - 25)) {
    bomb.xDirection *= -1;
  }
  if (bomb.y < 80 || bomb.y > (height - 30)) {
    bomb.yDirection *= -1;
  }
}
  }
  
 // Draw each bomb
  for (let i = 0; i < numBombs; i++) {
    const bomb = bombs[i];

    // Calculate the distance between the bomb and the character
    const d = dist(charX, charY, bomb.x, bomb.y);

    if (d < 50) {
      // The character is near the bomb, so draw it in red
      fill(255, 0, 0);
      HP = HP - 1;
    } else {
      // The character is far away from the bomb, so draw it in green
      fill(0, 255, 0);
    }

    ellipse(bomb.x, bomb.y, 20, 20);
  }
  }
    // BOMBS



  // TEST

  if (keyIsDown(72) && (HP > 0)) {
    HP = HP - 1
  }

  if (keyIsDown(84)) {
    console.log(round(gameTime, 1));
  }

  // TEST

  
    // DRAW CHARACTER
if (timeStart === 1){
  fill(255);
  circle(charX, charY, 50);
}
    // DRAW CHARACTER

    // DRAW HP
  
  if (HP < 1) {
    timeStart = 0;
  }

  fill(0);
  rect(30, 30, 740, 20, 20);
  fill('#FF0000');
  rect(30, 30, HP*7.4, 20, 20);

    // GAME TIMER
  
  if (timeStart === 1){
    gameTime = gameTime + (1/60);
  }
}
    // GAME TIMER
