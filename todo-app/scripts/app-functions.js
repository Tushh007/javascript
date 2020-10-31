"use strict";

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  let todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const todoEl = document.querySelector("#todos");
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  todoEl.innerHTML = "";
  todoEl.appendChild(generateSummaryDOM(incompleteTodos));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement("p");
    messageEl.classList.add("empty-message");
    messageEl.textContent = "No to-dos to show";
    todoEl.appendChild(messageEl);
  }
};

// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Set completed status
const todoStatus = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Get the DOM elements from the existing note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const checkboxEl = document.createElement("input");
  const textEl = document.createElement("span");
  const buttonEl = document.createElement("button");

  // Setup the todo checkbox element
  checkboxEl.setAttribute("type", "checkbox");
  checkboxEl.checked = todo.completed;
  containerEl.appendChild(checkboxEl);
  checkboxEl.addEventListener("change", (e) => {
    todoStatus(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup the todo text element
  textEl.textContent = todo.text;
  containerEl.appendChild(textEl);

  // Setup Container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  // Setup the todo remove button
  buttonEl.textContent = "remove";
  buttonEl.classList.add("button", "button--text");
  todoEl.appendChild(buttonEl);
  buttonEl.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  const plural = incompleteTodos.length === 1 ? "" : "s";
  summary.classList.add("list-title");
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
  return summary;
};
