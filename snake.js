
import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 2
const snakeBody = [{ x:10, y:11 }]

export function update(){
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2 ; i >= 0 ; i--){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function drow(gameBord){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBord.appendChild(snakeElement)

    })
}

export function expandSnake(amount) {
    newSegments +=  amount
}

export function onSnake(position) {
    return snakeBody.some(segment =>{
        return eqalPositions(segment, position)
    })
}

function eqalPositions(pos1, pos2) {
    return pos1.x ===pos2.x && pos1.y === pos2.y
}