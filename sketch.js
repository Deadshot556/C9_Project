var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(40,40,50,50)
  sprite.shapeColor = "gray"
console.log(sprite)
}

function draw() 
{
  background("red");

  if (keyDown(RIGHT_ARROW)){
  background("yellow")
  
  }
  drawSprites();
}




