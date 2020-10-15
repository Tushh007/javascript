const todos = [
  {
    text: "Order vergitables and fruits",
    completed: true,
  },
  {
    text: "Order from Amazon",
    completed: false,
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

const filters = {
  searchText: "",
  hideCompleted: false
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch;
  });

  document.querySelector("#todos").innerHTML = "";

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-todos").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#add-todo-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  todos.push({
    text: e.target.elements.addTodo.value,
    completed: false,
  });
  renderTodos(todos, filters)
  e.target.elements.addTodo.value = ''
});

document.querySelector("#hide-completed").addEventListener("change", function(e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
