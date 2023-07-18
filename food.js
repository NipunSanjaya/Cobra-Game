let food  = { x:10, y:13 }
const EXPANSION_RATE = 1 

export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = { x:20, y:10 }
    }

}

export function drow(gameBord){
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBord.appendChild(foodElement)

    
}