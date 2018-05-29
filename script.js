const canvas = document.querySelector('#container')
const clearBtn = document.querySelector('#clear')
const gradientBtn = document.querySelector('#gradient')
let lastSize = 16

function makeGrid(size) {
    for(let i = 0; i < (size*size); i ++) {
        const oneSquare = document.createElement('div')
        oneSquare.className = 'square'
        oneSquare.style.height = `${Math.round(800 / size)}px`
        oneSquare.style.width = `${Math.round(800 / size)}px`
        canvas.appendChild(oneSquare)
    } 
    lastSize = size*size
}
function draw(e) {
    if(e.target.className == 'square') {
        e.target.style.backgroundColor = '#036'
    }
}
function newGrid() {
    //clear the grid
    if(canvas.childElementCount > 0) {
        for(let i = 0; i < lastSize; i++) {
            const squareToRemove = document.querySelector('div[class="square"]')
            canvas.removeChild(squareToRemove)
        }
    }
    //use promt
    const answer = window.prompt(`Let's make new grid! How many squares per side?`)
    answer.trim()
    const answerToNumber = Number(answer)
    if(answerToNumber > 64) {
        window.alert(`That's too big, try again.`)
        return
    }   
    //create new grid
    makeGrid(answer)
}
function handleGradient() {
    
}

canvas.addEventListener('mousemove', draw)
clearBtn.addEventListener('click', newGrid)
gradientBtn.addEventListener('click', handleGradient)
window.onload = function() {
    makeGrid(16)
}