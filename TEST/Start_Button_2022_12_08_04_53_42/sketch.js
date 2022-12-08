// BOMB GAME


// Time
let gameTime = 0;
let timeStart = 0;

// HP bar
let HP = 100;

// starting position variables
let charX = 50;
let charY = 200;
let startX = 300;
let startY = 350;

// character axial movement speed
let charSpeed = 5;

// character hitbox radius
let charBox = 25;

// bomb image preload
function preload() {
  bomb = loadImage('favicon.png');
}

function setup() {

  createCanvas(800, 800);

  frameRate(60);

// creating button
let button;  
  button = createButton('Start!');
  button.position(300,350);
  button.size(200, 100);
  button.mousePressed(startGame);  
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
text(round(gameTime, 2), 40, 73);

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

  fill(0);
  rect(30, 30, 740, 20, 20);
  fill('#FF0000');
  rect(30, 30, HP*7.4, 20, 20);

    // GAME TIMER
  
  if (timeStart === 1){
    gameTime = gameTime + (1/60);
  }
  
    // GAME TIMER

}