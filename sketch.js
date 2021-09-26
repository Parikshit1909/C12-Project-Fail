var garden,rabbit;
var gardenImg,rabbitImg;
var score;
var leafImg1,leafImg2,leafImg3;
var appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg1 = loadImage("leaf.png");
  leafImg2 = loadImage("orangeLeaf.png");
  leafImg3 = loadImage("redImage.png");
  appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(rabbit.isTouching(apple)){
    score = score + 5;
  }else{
    if(rabbit.isTouching(leaf1)){
      score = score + 3;
    }
  }
  
  rabbit.x = World.mouseX
  
  spawnObjects();
  drawSprites();
}
function spawnObjects(){
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      apple = createSprite(random(50,350),40,10,10);
      apple.addImage(appleImg);
      apple.scale = 0.05;
      apple.velocityY = 5;
      apple.lifetime = 340;
    }
    else{ 
    leaf1 = createSprite(random(50,350),40,10,10);
    leaf1.addImage(leafImg1);
    leaf1.scale = 0.05;
    leaf1.velocityY = 3.5;
    leaf1.lifetime = 340;
    }
  }
}