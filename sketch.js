var fixed,moving,s1,s2,s3,s4
function setup() {
  createCanvas(400,400);
  fixed=createSprite(200, 200, 50, 70);
   moving=createSprite(100,100,70,50);
   fixed.shapeColor="red";
   moving.shapeColor="green";
   s1=createSprite(100,50,10,10);
   s2=createSprite(300,50,10,10);
   s1.velocityX=2
   s2.velocityX=-2
   s3=createSprite(100,350,10,10);
   s4=createSprite(300,350,10,10);
   s3.velocityX=2
   s4.velocityX=-2
}

function draw() {
  background("black"); 
  moving.x=World.mouseX;
  moving.y=World.mouseY; 
  if(IsTouching(moving,fixed)){
    fixed.shapeColor="blue";
    moving.shapeColor="yellow";
  }
  else{
  fixed.shapeColor="red";
  moving.shapeColor="green";
 
  }
  BounceOff(s1,s2);
  Collide(s3,s4);
  drawSprites();
}