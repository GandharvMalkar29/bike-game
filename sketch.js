var bike;
var track;
var bikeGroup;
var gameState = 1

function preload(){
   track = loadImage("track.jpg");
   bikeImg = loadImage("BIKE-removebg-preview.png");
   bike1Img = loadImage("bike1-removebg-preview.png");
   gameOver = loadImage("GAME OVER.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    bike = createSprite(displayWidth/2,displayHeight-50,50,100);
    bike.shapeColor = "blue"
    bike.addImage(bikeImg);
    bike.scale = 0.4
    bikeGroup = new Group()
}

function draw(){
   background("brown");

   if(gameState === 1){
     image(track,0,-8*displayHeight,displayWidth,9*displayHeight)

     if(keyDown("UP")){
      bike.y = bike.y-15
    }  
 
    if(keyDown("right")){
      bike.x = bike.x+10
    }

    if(keyDown("left")){
      bike.x = bike.x-10
    }  

    obsticale();

    camera.position.x = displayWidth/2
    camera.position.y = bike.y

    if(bike.isTouching(bikeGroup)){
      gameState = 0
    }

    drawSprites();
   }
   
   if(gameState === 0){
      background("black")
     // imageMode(CENTER)
      image(gameOver,displayWidth/2,displayHeight/2,400,400)
   }
  
   

   

  
}

function obsticale(){
  if(frameCount % 70 === 0){
    var bike1 = createSprite(random(200,displayWidth-200),(displayHeight-50),50,100)
    bike1.shapeColor = "red"
    bike1.velocityY = -12
    bike1.lifetime = displayHeight/5
    bikeGroup.add(bike1)
    bike1.addImage(bike1Img);
    bike1.scale = 0.3
  }
}