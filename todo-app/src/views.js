import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'
// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  const todoEl = document.querySelector("#todos");
  const { searchText, hideCompleted } = getFilters()
  const filteredTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const hideCompletedMatch = !hideCompleted || !todo.completed;
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
    messageEl.textContent = "There are no to-dos to show";
    todoEl.appendChild(messageEl);
  }
};

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
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
      toggleTodo(todo.id);
      renderTodos();
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
      renderTodos();
    });
  
    return todoEl;
  };

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  const plural = incompleteTodos.length === 1 ? "" : "s";
  summary.classList.add("list-title");
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
  return summary;
};

// Make sure to set up the exports
export { generateTodoDOM, renderTodos, generateSummaryDOM }
