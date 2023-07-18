import { onSnake , expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food  = { x:12, y:16 }
const EXPANSION_RATE = 2 

export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }

}

export function drow(gameBord){
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBord.appendChild(foodElement)

    
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}