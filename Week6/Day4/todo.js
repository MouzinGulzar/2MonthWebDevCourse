let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let todoList = document.querySelector("#todos");
let todoNum = document.querySelector("#todo-num");

const delBtn = (id) => {
  return `<button class="btn-del" onclick=deleteTodo(${id})>
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="blue"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>`;
};

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

todoNum.textContent = todos.length;

for (let i = 0; i < todos.length; i++) {
  let li = document.createElement("li");
  li.textContent = todos[i];
  // let index = todos.length - i;
  li.setAttribute("id", `todo-${i + 1}`); //<li id="todo-0"></li>
  li.innerHTML += delBtn(i + 1);
  todoList.append(li);
}

function addTodo() {
  let item = input.value.trim();

  if (item == "") {
    return;
  }

  todoNum.textContent = todos.length + 1;

  document.querySelector(".message").classList.add("hidden");

  let li = document.createElement("li"); //<li></li>
  li.textContent = item; //<li>item</li>
  li.setAttribute("id", `todo-${todos.length + 1}`); //<li id="todo-0"></li>
  li.innerHTML += delBtn(todos.length + 1);
  todoList.append(li);

  input.value = "";

  todos.push(item);
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

// DELETE BUTTON FUNCTIONALITY
const refreshIDs = () => {
  let lis = document.querySelectorAll("li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute("id", `todo-${i + 1}`);
    lis[i].innerHTML = `${lis[i].textContent}${delBtn(i + 1)}`;
  }
};
const deleteTodo = (index) => {
  index = index - 1;
  let deletedLi = document.querySelector(`#todo-${index + 1}`);
  deletedLi.remove();
  console.log(deletedLi);

  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));

  todoNum.textContent = Number(todoNum.textContent) - 1;

  refreshIDs();

  if (todos.length == 0) {
    document.querySelector(".message").classList.remove("hidden");
  }
};
