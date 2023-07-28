
import { update as updateSnake, drow as drowSnake, SNAKE_SPEED, getSnakeHead, snakeInterSection } from "./snake.js"
import { update as updateFood, drow as drowFood } from "./food.js"
import { outSideGrid } from "./grid.js"



let lastRenderTime = 0
let gameOver = false
const gameBord = document.getElementById('game-bord')


function main(currentTime){

    if(gameOver){
        if (confirm('Oops..!!!  You lost. press OK to restart ')) {
            window.location = '/'
        }
        return

    }

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
    checkDeath()
    

}

function drow(){
    gameBord.innerHTML = ''
    drowSnake(gameBord)
    drowFood(gameBord)
    
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeInterSection()
}