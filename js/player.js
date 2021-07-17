class Player{
    constructor(){
        this.name = null;
        this.distance = 0
        this.index = null;
    }
getCount(){
var playerCountRef = database.ref("playerCount")
playerCountRef.on("value",function(data){
    playerCount = data.val()
})
}
updateCount(count){
database.ref("/").update({
    playerCount:count
})

}
update(){
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).update({
        name:this.name,
        distance:this.distance
    })
}
static getAllPlayersinfo(){
var databaseRef = database.ref("players")
databaseRef.on("value",function(data){
    allPlayers = data.val()
    console.log(allPlayers)
})
}
}