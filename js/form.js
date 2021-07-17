class Form{
    constructor(){
        this.button = createButton("PLAY")
        this.input = createInput("name")
        this.greeting = createElement("h3")
        this.reset = createButton("reset")
    }
hide(){
this.button.hide()
this.input.hide()
this.greeting.hide()
}
display(){
var title = createElement("h2")
title.html("car racing game")
title.position(width/2-50,0)


this.input.position(width/2-80,height/3-50)

this.button.position(width/2-40,height/3-20)

this.reset.position(width-100,30)

this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name = this.input.value()
    playerCount = playerCount+1
    player.index = playerCount
    player.updateCount(playerCount)
    player.update(player.name)

this.greeting.html("hi "+ player.name)
this.greeting.position(width/2-40,height/3-20)
})

this.reset.mousePressed(()=>{
    game.updateState(0)
    player.updateCount(0)
})
}
}