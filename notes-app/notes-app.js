// DOM - Document Object Model
const notes = [
    {
        title: 'my next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Excercise. Eating a bit better.'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

document.querySelector('button').addEventListener('click', function (event) {
    event.target.textContent = 'The button was clicked!'
})