
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x = ground.width/2
  
  obstacleGroup = new Group()
  foodGroup = new Group()
  
  
}


function draw(){
  background(200)
  
  
  ground.velocityX = -4
  
  if(ground.x<100){
    ground.x = 400
  }
  
  if(keyDown("space")&&monkey.y>140){
    monkey.velocityY=-6
  }
  
  monkey.velocityY +=0.8
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach()
  }
  
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach()
    foodGroup.destroyEach()
    survivalTime = 0
    score = 0
  }
  
  
  monkey.collide(ground)
  

  
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Survival Time: " +score, 500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival time: "+survivalTime, 100, 50)
  
  fruits()
  rocks()
  drawSprites()
}

function rocks(){
  if (World.frameCount % 200 === 0){
    obstacle = createSprite(400,340,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -8    
    obstacle.setLifeTime = 150,[]
    obstacleGroup.add(obstacle)
  }
}

function fruits(){
  if (World.frameCount % 80 === 0){
    banana = createSprite(400,340,20,20)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.y = Math.round(random(120,200))
    banana.velocityX = -8    
    banana.setLifeTime = 150,[]
    foodGroup.add(banana)
  }
}






