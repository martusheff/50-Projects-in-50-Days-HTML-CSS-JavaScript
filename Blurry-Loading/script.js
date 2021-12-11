const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.bg')

let load = 0

let interval = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(interval)
    }
    
    loadText.innerText = `${load}%`

    background.style.filter = `blur(${60-load}px)`
    loadText.style.opacity = (100 - load)/100
}