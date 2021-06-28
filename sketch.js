var runner,running;
var pathImg,coin,bomb,energyDrink;
function preload(){
  //pre-load images
  running = loadAnimation("Runner-1.png,Runner-2");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(200,350,20,50);
  runner.addAnimation("running",running);
   
  path = createSprite(200,200,100,400);
  path.addImage("pathImg",pathImg);
  path.velocityY = 4;

}

function draw() {
  background(0);
 drawSprites();
}
