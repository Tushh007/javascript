// // create a list of 5 items of to-do
// let todos = [
//   "Wake up at 7",
//   "Study for the test",
//   "Excercise",
//   "Bake the Cake",
//   "Clean Home",
// ];

// console.log(`You have ${todos.length} to-do items!`);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

// console.log(todos);

// // delete the 3rd item
// todos.splice(2, 1);

// // add a new item to the end
// todos.push("added new item at the end");

// // remove the first item
// todos.shift();

// console.log(todos);

// todos.forEach(function (item, index) {
//   console.log(`${index + 1}. ${item}`);
// });

// console.log("");

// for (let index = 0; index < todos.length; index++) {
//   console.log(`${index + 1}. ${todos[index]}`);
// }

// console.log("");

// console.log(todos.indexOf("Excercise"));

const todos = [
  {
    text: "Todo 3",
    completed: true,
  },
  {
    text: "Todo 1",
    completed: false,
  },
  {
    text: "Todo 2",
    completed: false,
  },
  {
    text: "Todo 4",
    completed: false,
  },
];

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (a.text.toLowerCase() < b.text.toLowerCase()) {
            return -1
        } else if (b.text.toLowerCase() < a.text.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const sortTodosByStatus = function (todos) {
    todos.sort(function (a, b) {
        if(!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

sortTodosByStatus(todos)
console.log(todos)

// const searchToDo = function (todos, query) {
//   return todos.filter(function (todo) {
//     const isTextMatch = todo.text.toLowerCase().includes(query.toLowerCase());
//     return isTextMatch;
//   });
// };

// console.log(searchToDo(todos, "do 1"));

// const getThingsToDo = function (todos) {
//   return todos.filter(function (todo) {
//     return !todo.completed;
//   });
// };

// console.log(getThingsToDo(todos));

// const deleteTodo = function (todos, todoText) {
//   const index = todos.findIndex(function (todo) {
//     return todo.text.toLowerCase() === todoText.toLowerCase();
//   });

//   // delete the note
//   if (index > -1) {
//     todos.splice(index, 1);
//   }
// };

// deleteTodo(todos, "Todo 5");
// console.log(todos);

// console.log(todos);

// const index = todos.findIndex(function (todo, index) {
//   console.log(index, todo);
//   return todo.title === "Todo 3";
// });

// console.log(index);

// const findTodo = function (todos, todoTitle) {
//   const index = todos.findIndex(function (todo, index) {
//     return todo.title.toLowerCase() === todoTitle.toLowerCase();
//   });

//   return todos[index];
// };

// const findTodo = function (todos, todoTitle) {
//   const todo = todos.find(function (todo, index) {
//     return todo.title.toLowerCase() === todoTitle.toLowerCase();
//   });

//   return todo;
// };

// const todo = findTodo(todos, "TODO 5");
// console.log(todo);
