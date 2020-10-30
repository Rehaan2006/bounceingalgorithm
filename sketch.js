var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3, gameObject4;

function setup() {
 var canvas = createCanvas(800,400);
 movingRect= createSprite(500, 380, 50, 50);
 movingRect.shapeColor="blue";
 movingRect.velocityY=-4;
 fixedRect=createSprite(500,20,50,50)
 fixedRect.shapeColor="green";
 fixedRect.velocityY=4;

 
 
 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor="yellow";
 gameObject2 = createSprite(200,100,50,50);
 gameObject2.shapeColor="yellow";
 gameObject3 = createSprite(300,100,50,50);
 gameObject3.shapeColor="yellow";
 gameObject4 = createSprite(400,100,50,50);
 gameObject4.shapeColor="yellow";
}

function draw() {
  background(0);  
 // movingRect.x=mouseX;
  //movingRect.y=mouseY;
  bounceOff(fixedRect,movingRect);
  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    gameObject1.shapeColor="yellow";
  }
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red";
  gameObject2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    gameObject2.shapeColor="yellow";
  }
  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor="red";
  gameObject3.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    gameObject3.shapeColor="yellow";
  }
  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor="red";
  gameObject4.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    gameObject4.shapeColor="yellow";
  }
  
  
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 && 
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2){
  return true;
}
else{
return false ;
}
}

function bounceOff(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 && 
  object2.x-object1.x<object1.width/2+object2.width/2 ){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }

if (object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }
  
}