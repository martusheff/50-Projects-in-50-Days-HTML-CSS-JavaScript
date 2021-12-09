const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

const home = document.getElementById('home')
const about = document.querySelector('.fa-user-alt')
const contact = document.querySelector('.fa-envelope')

const homeContent = document.getElementById('home-content')

var counter = 0


open.addEventListener('click', () => container.classList.add
('show-nav'))

close.addEventListener('click', () => container.classList.remove
('show-nav'))

home.addEventListener('click', () => {
    counter++
    console.log(counter)
})