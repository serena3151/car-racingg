class Game{
    constructor(){
    }
getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
    gameState=data.val();
    })
}  
updateState(gameState){
    database.ref("/").update({
        gameState:gameState
    })
}
start(){
    if(gameState===0){
        form = new Form();
        form.display();
        player = new Player();
        player.getCount();
    }
    car1 = createSprite(100,200)
    car1.addImage(car1img)
    car2 = createSprite(300,200)
    car2.addImage(car2img)
    car3 = createSprite(500,200)
    car3.addImage(car3img)
    car4 = createSprite(700,200)
    car4.addImage(car4img)
    cars =[car1,car2,car3,car4]
}
play(){
form.hide()
Player.getAllPlayersinfo();
if(allPlayers!== undefined){
background(groundImg)
image(trackImg,0,-height*4,width,height*5)
var index = 0
var x = 75
var y 
for(var plr in allPlayers){
index = index+1
x = x+220
y = height-allPlayers[plr].distance
cars[index-1].x = x
cars[index-1].y = y
if(index === player.index){
cars[index-1].shapeColor = "red"
fill("red")
ellipse(x,y,100,100);
camera.position.x = width/2
camera.position.y = cars[index-1].y
}
}


    if(keyDown(UP_ARROW)&& player.index !== null){
        player.distance+=50
        player.update();
    }
    if(player.distance > 3500){
        gameState = 2
    }
}
drawSprites()
}
end(){
console.log("game has ended")
}
}
