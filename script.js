const input = document.getElementById('quantity')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const addToCart = document.getElementById('addToCart')
const confirmation = document.getElementById('confirmation')
const toast = document.querySelector('.toast')

var valueInt = parseInt(input.value)

plus.addEventListener('click', () => {
    confirmation.classList.remove('active')
    valueInt = parseInt(input.value)
    if(valueInt + 1 > 99) {
        valueInt = 99
    } else {
        ++valueInt
    }
    input.value = valueInt
})

minus.addEventListener('click', () => {
    confirmation.classList.remove('active')
    valueInt = parseInt(input.value)
    if(valueInt - 1 < 1) {
        valueInt = 1
    } else {
        --valueInt
    }
    input.value = valueInt

})

addToCart.addEventListener('click', () => {
    showToast()
    valueInt = parseInt(input.value)
    confirmation.classList.add('active')
    confirmation.innerHTML = "Added <b>" + valueInt + " item(s) </b>to your cart."
    valueInt = 1
    input.value = 1
    setTimeout(dropToast, 3000)
})

function showToast() {
    toast.classList.add('active')
}

function dropToast() {
    toast.classList.remove('active')
}