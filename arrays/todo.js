// create a list of 5 items of to-do
let todos = ['Wake up at 7', 'Study for the test', 'Excercise', 'Bake the Cake', 'Clean Home']

// console.log(`You have ${todos.length} to-do items!`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 2]}`)

console.log(todos)

// delete the 3rd item
todos.splice(2, 1)

// add a new item to the end
todos.push('added new item at the end')

// remove the first item 
todos.shift()

console.log(todos)

todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

console.log('')

for (let index = 0; index < todos.length; index++) {
    console.log(`${index + 1}. ${todos[index]}`)
}

console.log('')

console.log(todos.indexOf('Bake the Cake'))