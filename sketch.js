var dogImg,dogImg2,garden,washroom,bedroom;
var fedTime,lastFed,currentTime;
var dog;
var foodS=20;
var gameState
var readState;
var food;
function preload(){
dogImg=loadImage("Images/dogImg.png");
dogImg2=loadImage("Images/dogImg1.png");
garden=loadImage("Garden.png");
washroom=loadImage("Wash Room.png");
bedroom=loadImage("Bed Room.png");
}

function setup() {
  
  createCanvas(1200,600);
  database=firebase.database();
  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
  food= new Food();

  dog = createSprite(600,300,20,20);
  dog.scale = 0.5;
  dog.addImage(dogImg2);

 

  
  addFoodButton = createButton("ADD FOOD");
  addFoodButton.position(800,95);
  addFoodButton.mousePressed(addFood);
  feed = createButton("FEED DOG");
  feed.position(700,95);
  feed.mousePressed(feedDog);

}

function draw() {
  currentTime=hour();
  if(currentTime==(lastFed+1)){
      update("Playing");
      food.garden();
   }else if(currentTime==(lastFed+2)){
    update("Sleeping");
      food.bedroom();
   }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
    update("Bathing");
      food.washroom();
   }else{
    update("Hungry")
    food.display();
   }
   
   if(gameState!="Hungry"){
     feed.hide();
     addFoodButton.hide();
     dog.remove();
   }else{
    feed.show();
    addFoodButton.show();
    dog.addImage(dogImg);
   }
   fedTime=database.ref('FeedTime');
   fedTime.on("value",function(data){
     lastFed=data.val();
   });
  drawSprites();
}




function feedDog(){
 

  dog.addImage(dogImg2)
  // foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   foodS--;
   dataBase.ref('/').update({
   Food:food.getFoodStock(),
   FeedTime:hour()
    })
  
  }
  
  function addFood(){
      foodS++;
      dataBase.ref('/').update({
      Food:foodS
    })
  
  }

function update(state){
  database.ref('/').update({
    gameState:state
  })
}