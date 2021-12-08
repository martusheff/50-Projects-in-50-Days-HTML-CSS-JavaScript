const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const body = document.getElementById('body')
const reset = document.getElementById('reset')


const circleColors = ["#3498db", "#db3434", "#34db95","#ac34db","#dbc234"]

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
    //changeColor()
})

prev.addEventListener('click', () => {
    currentActive--
    
    if(currentActive < 1) {
        currentActive = 1
    }
    update()
    //changeColor()
    
})

reset.addEventListener('click', () => {
    currentActive = 1
    //changeColor()
    
    update()
    next.disabled = false
})

function changeColor() {
    
    circles[currentActive - 1].style.border ="3px solid " + circleColors[currentActive-1]
    progress.style.backgroundColor = circleColors[currentActive-1]
    prev.style.backgroundColor = circleColors[currentActive-1]
    next.style.backgroundColor = circleColors[currentActive-1]
    body.style.backgroundColor = circleColors[currentActive-1]+"15"
}

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true 
    } else {
        prev.disabled = false
        next.disabled = false
    }


}