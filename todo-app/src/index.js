// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { setFilters } from "./filters";
import { renderTodos } from "./views";
import { createTodo, loadTodos } from "./todos";

// Render initial todos
renderTodos();

// Set up search text handler
document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderTodos();
});

// Set up checkbox handler
document.querySelector("#hide-completed").addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.checked,
  });
  renderTodos();
});

// Set up form submission handler
document.querySelector("#add-todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.addTodo.value.trim();

  if (text.length > 0) {
    createTodo(text);
    renderTodos();
    e.target.elements.addTodo.value = "";
  }
});

// Bonus: Add a watcher for local storage
window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    loadTodos();
    renderTodos();
  }
});
