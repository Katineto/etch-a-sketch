const defaultSize = 16
const container = document.querySelector('.grid-container')
function resetContainer () {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}
function makeGrid(size) {
    resetContainer()
    for(let i = 0; i < (size*size); i ++) {
        const oneSquare = document.createElement('div')
        oneSquare.className = 'square'
        container.appendChild(oneSquare)
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)` 
}

const rawInput = document.querySelector('input')
const form = document.getElementById('form')
function handleInput(e) {
    const rawToNumber = Number(rawInput.value)
    makeGrid(rawToNumber)
    e.preventDefault()
    form.reset()
}
let lastTarget
function changeOpacity(e){
    if(e.target.className == 'square' && e.target != lastTarget) {
        e.target.style.opacity = `${Number(e.target.style.opacity) + 0.3}`
        lastTarget = e.target
    }
}

container.addEventListener('mousemove', changeOpacity)
form.addEventListener('submit', handleInput)
window.onload = function() {
    makeGrid(defaultSize)
}