// Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON != null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

// Remove todo by id
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Set completed status
const todoStatus = function (id) {
    const todo = todos.find(function (todo) {
      return todo.id === id
    })

    if (todo !== undefined) {
      todo.completed = !todo.completed
    }
}

// Get the DOM elements from the existing note
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement("div");

  // Setup the todo checkbox element
  const checkboxEl = document.createElement("input")
  checkboxEl.setAttribute("type", "checkbox")
  checkboxEl.checked = todo.completed
  todoEl.appendChild(checkboxEl)
  checkboxEl.addEventListener("change", function (e) {
    todoStatus(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })

  // Setup the todo text element
  const textEl = document.createElement("span");
  textEl.textContent = todo.text;
  todoEl.appendChild(textEl)

  // Setup the todo remove button 
  const buttonEl = document.createElement("button")
  buttonEl.textContent = "x"
  todoEl.appendChild(buttonEl)
  buttonEl.addEventListener("click", function () {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })

  return todoEl ;
};

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
