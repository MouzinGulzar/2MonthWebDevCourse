let btn = document.querySelector("#btn");
let todo = document.querySelector("#todo");

let form = document.querySelector("#todo-form");

let todos = [];

if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

document.addEventListener("DOMContentLoaded", function () {
  // Set the scrollTop property of the ul to its maximum value
  todoList.scrollTop = todoList.scrollHeight;
  if (todos.length > 0) {
    document.querySelector(".message").classList.add("hidden");
  }
});

function addTodo(due, todo, cat, priority) {
  let todoObj = {
    due: due,
    todo: todo,
    cat: cat,
    priority: priority,
    added: new Date().toLocaleString(),
  };

  todos.push(todoObj);

  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);

  let due = formData.get("due-date") || null;
  let todo = formData.get("todo");
  let cat = formData.get("category");
  let priority = formData.get("priority");

  addTodo(due, todo, cat, priority);
});
