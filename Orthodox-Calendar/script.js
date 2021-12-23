const dataElement = document.getElementById('data')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    passageNum++
    fetchData()
})

fetchData()

var passageNum = 0;

async function fetchData() {
    const response = await fetch('https://orthocal.info/api/oca/')
    const data = await response.json()
    console.log(data)


    dataElement.innerHTML = data.readings[0].passage[passageNum].content
}