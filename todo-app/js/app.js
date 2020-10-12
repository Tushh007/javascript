const todos = [
  {
    text: "Order vergitables and fruits",
    completed: true,
  },
  {
    text: "Clean the kitchen",
    completed: true,
  },
  {
    text: "Learn Javascript",
    completed: false,
  },
  {
    text: "Excercise",
    completed: false,
  },
];

// Print a summary: You have 2 todos left in  p element
const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

// Add a p for each todo above text value of the object as visible element
todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('button').addEventListener('click', function(event) {
    console.log('Button Clickend \n', event)
})

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }
// })
