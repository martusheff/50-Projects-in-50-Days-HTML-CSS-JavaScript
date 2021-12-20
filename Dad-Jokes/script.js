const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json()
    joke.innerHTML = data.joke
}

jokeBtn.addEventListener('click', generateJoke)

// function generateJoke() {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then(data => {
//         joke.innerHTML = data.joke
//     })
// }

// jokeBtn.addEventListener('click', generateJoke)