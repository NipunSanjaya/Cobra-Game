import { onSnake , expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"
// import { gameBord } from "./game.js"

let food  = { x:12, y:16 }
// let food2 = { x: 2, y: 19 };
const EXPANSION_RATE = 1 
const BONUS_TIME_LIMIT = 3000;
const BONUS_POINTS = 10;
let foodSpawnTime = Date.now();
const FOODS_FOR_BONUS = 5;
let foodsEaten = 0;
let bonusFoodPosition = null


export function update(){
    if (onSnake(food)){
        const currentTime = Date.now()
        const timeElapsed = currentTime - foodSpawnTime

        if (timeElapsed <= BONUS_TIME_LIMIT) {
            expandSnake(EXPANSION_RATE + BONUS_POINTS)
        }else{
            expandSnake(EXPANSION_RATE)
        }
        // foodsEaten++
        // if (foodsEaten >= FOODS_FOR_BONUS) {
        //     bonusFoodPosition = getRandomFoodPosition();
        //     spawnBonusFood(gameBord);
        //     
        //     foodsEaten = 0; 
        // }
        food = getRandomFoodPosition()
        foodSpawnTime = Date.now();
        // console.log(foodsEaten)
    }
}

export function spawnBonusFood() {
    // console.log("hi")
    
    if (bonusFoodPosition !== null) {
        const bonusFoodElement = document.createElement('div'); // Create a new element for the bonus food
        bonusFoodElement.style.gridRowStart = bonusFoodPosition.y;
        bonusFoodElement.style.gridRowEnd = bonusFoodPosition.y+1;
        bonusFoodElement.style.gridColumnStart = bonusFoodPosition.x;
        bonusFoodElement.style.gridColumnEnd = bonusFoodPosition.x+1;
        bonusFoodElement.classList.add('bonus-food');
        gameBord.appendChild(bonusFoodElement); 
        // console.log("Bonus Food Position:", bonusFoodPosition);
        // console.log("hi")
    }
    // console.log("Bonus Food Position:", bonusFoodPosition);
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