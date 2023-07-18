
import { update as updateSnake, drow as drowSnake, SNAKE_SPEED } from "./snake.js"
import { update as updateFood, drow as drowFood } from "./food.js"

let lastRenderTime = 0
const gameBord = document.getElementById('game-bord')


function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    if (secondsSinceLastRender < 1/SNAKE_SPEED) return

    
    
    // console.log('Render')
    lastRenderTime = currentTime

    update()
    drow()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()


}

function drow(){
    gameBord.innerHTML = ''
    drowSnake(gameBord)
    drowFood(gameBord)
}