
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score, survivalTime = 0;


function preload(){
  
 monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
 bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
}

function setup() {
createCanvas(600,600);

monkey = createSprite(80,315,20,20);
monkey.addAnimation("monkeyAnimation", monkey_running);
monkey.scale=0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX= -4;

}

function draw() {
background("white");
  
if(keyDown("space")&& monkey.y >= 100) 
{
monkey.velocityY = -12;
}

monkey.velocityY = monkey.velocityY + 0.8;
  
if (ground.x < 200)
  {
  ground.x = ground.width/2;
  }

monkey.collide(ground);

survivalTime = Math.ceil(frameCount/frameRate());
  
textSize(20);
fill("black");

text("survivalTime : 0" + survivalTime, 100, 50);
  

drawSprites();
}
