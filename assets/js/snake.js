
import { getInputDirection } from "./input.js"

const scoreElement = document.querySelector('.current_score')
const HighScoreElement = document.querySelector('.high_score')

export const SNAKE_SPEED = 4
const snakeBody = [{ x:10, y:11 }]
let newSegments = 0
let score = 0;

let highScore = localStorage.getItem('high_score') || 0;
HighScoreElement.innerHTML = `High Score : ${highScore}`

export function update(){
    addSegments()
    // updateScore()
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
    score++
    highScore = score >= highScore ? score : highScore
    localStorage.setItem("high_score", highScore)
    scoreElement.innerHTML = `Score : ${score}`
    HighScoreElement.innerHTML = `High Score : ${highScore}`
}

export function onSnake(position, {ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) =>{
        if (ignoreHead && index === 0) {
            return false
        }
        return eqalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeInterSection() {
    return onSnake(snakeBody[0], { ignoreHead : true })
}

function eqalPositions(pos1, pos2) {
    return pos1.x ===pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})

    }

    newSegments = 0
}

