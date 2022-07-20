//declaring global variables
var box;

//to create things,runs once at the start of game.
function setup() {
  createCanvas(450,460);

  //creating a box sprite
  box = createSprite(60,60,50,50)
  box.shapeColor = "red"

}


//to do things continuously, runs for every frame.
function draw() 
{ 
  // background is used to clear the screen and give it color
  background(30);

  if (keyIsDown(UP_ARROW)){
   box.y -= 5
  }
 if (keyIsDown(DOWN_ARROW)){
   box.y += 4
 }
 if (keyIsDown(LEFT_ARROW)){
  box.x -=3
  }
 
  if (keyIsDown(RIGHT_ARROW)){
    box.x +=3
  }
  
  
  //to display sprites on screen 
  drawSprites()
}




