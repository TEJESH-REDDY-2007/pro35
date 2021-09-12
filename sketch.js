//Create variables here

var dog, happyDog, dog1;
var foodS, foodStock, database;


function preload()
{
	//load images here

  dog = loadImage("dogImg.png");
  dog1 = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

	createCanvas(500, 500);

  happyDog = createSprite(255, 300)
  happyDog.addImage(dog)
  happyDog.scale=0.1

  food = database.ref('food');
  food.on("value",readStocks);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStocks(food);
    happyDog.addImage(dog1);
  }

  drawSprites();
  //add styles here
  fill(0)
  text("Press (UP ARROW) key to feed the dog and make it happy", 50, 10);
  text("But donot press up arrow above 20 to 32",50,25);

}

function readStocks(data){
  food = data.val();
}

function writeStocks(x){
  database.ref('food').update({
    food:x
  })
}