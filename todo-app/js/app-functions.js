'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  let todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo))
  });
};

// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) =>todo.id === id)
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Set completed status
const todoStatus = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
      todo.completed = !todo.completed
    }
}

// Get the DOM elements from the existing note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("div");

  // Setup the todo checkbox element
  const checkboxEl = document.createElement("input")
  checkboxEl.setAttribute("type", "checkbox")
  checkboxEl.checked = todo.completed
  todoEl.appendChild(checkboxEl)
  checkboxEl.addEventListener("change", (e) => {
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
  buttonEl.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })

  return todoEl ;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
