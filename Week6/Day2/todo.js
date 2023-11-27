let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let todoList = document.querySelector("#todos");

let delBtn = `<button class="btn-del">
<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="blue"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>`;

let todos = [];


if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

document.addEventListener("DOMContentLoaded", function () {
  // Set the scrollTop property of the ul to its maximum value
  todoList.scrollTop = todoList.scrollHeight;
});

for (let i = 0; i < todos.length; i++) {
  let li = document.createElement("li");
  li.textContent = todos[i];
  li.innerHTML += delBtn; 
  todoList.prepend(li);
}

function addTodo() {
  let item = input.value.trim();

  if (item == "") {
    return;
  }

  let li = document.createElement("li"); //<li></li>
  li.textContent = item; //<li>item</li>
  li.innerHTML += delBtn;
  todoList.append(li);

  input.value = "";

  todos.unshift(item);
  console.log(todos);

  localStorage.setItem("todos", JSON.stringify(todos));

  todoList.scrollTop = todoList.scrollHeight;
}

btn.addEventListener("click", () => {
  addTodo();
});

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
});
