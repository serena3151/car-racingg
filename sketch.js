var database;
var position;
var form, game, player
var gameState =0
var playerCount
var allPlayers;
var car1, car2, car3, car4, cars
var car1img, car2img, car3img, car4img, trackImg, groundImg

function preload(){
car1img = loadImage("images/car1.png")
car2img = loadImage("images/car2.png")
car3img = loadImage("images/car3.png")
car4img = loadImage("images/car4.png")
trackImg = loadImage("images/track.png")
groundImg = loadImage("images/ground.png")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth -80,displayHeight-50);
 game = new Game();
 game.getState()
 game.start()
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.updateState(1)
  }
  if(gameState === 1){
    game.play()
  }
if(gameState ===2){
  game.end()
}
  
}












/*Database for Multi playerCar Racing Game 
{ gameState: 0, playerCount: 0, player1: { name: "" }, player2: { name: "" } } 
Game : Read gameState from DB, Update gameState in DB. 
Start the game according to gameState if(gameState === 0)
{ create form object and Display form create player object and get player Count }
 Form: Title Input Button Greeting On button press
{ Hide input and button
 Update playerCount 
Update playerName 
Display greeting
 Player: Get count() 
updateCount() 
update() */