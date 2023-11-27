let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let todoList = document.querySelector("#todos");
let todoNum = document.querySelector("#todo-num");

const delBtn = (id) => {
  return `<button class="btn-del" onclick=deleteTodo(${id})>
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="red"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>`;
};

const editBtn = (id) => {
  return `<button class="btn-edit" onclick=editTodo(${id})>
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="blue"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button>`;
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

  let span = document.createElement("span");
  span.textContent = todos[i];
  li.append(span);

  li.setAttribute("id", `todo-${i + 1}`); //<li id="todo-0"></li>
  let div = document.createElement("div");
  div.classList.add("btns");
  div.innerHTML += editBtn(i + 1);
  div.innerHTML += delBtn(i + 1);
  li.append(div);

  todoList.append(li);
}

function addTodo() {
  let item = input.value.trim();

  if (item == "") {
    return;
  }

  todoNum.textContent = todos.length + 1;

  document.querySelector(".message").classList.add("hidden");

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = item;
  li.append(span);

  li.setAttribute("id", `todo-${todos.length + 1}`);

  let div = document.createElement("div");
  div.classList.add("btns");
  div.innerHTML += editBtn(todos.length + 1);
  div.innerHTML += delBtn(todos.length + 1);
  li.append(div);

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

    let div = document.createElement("div");
    div.classList.add("btns");
    div.innerHTML += editBtn(i + 1);
    div.innerHTML += delBtn(i + 1);

    lis[i].innerHTML = `<span>${lis[i].textContent}</span>${div.outerHTML}`;
  }
};

const deleteTodo = (index) => {
  index = index - 1;
  let deletedLi = document.querySelector(`#todo-${index + 1}`);
  deletedLi.remove();

  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));

  todoNum.textContent = Number(todoNum.textContent) - 1;

  refreshIDs();

  if (todos.length == 0) {
    document.querySelector(".message").classList.remove("hidden");
  }
};

const editTodo = (index) => {
  let editedTodo = document.querySelector(`#todo-${index} span`);
  let edit = prompt("Edit todo", editedTodo.textContent);

  edit = edit.trim();

  if (edit == "") {
    return;
  }

  todos[index - 1] = edit;
  localStorage.setItem("todos", JSON.stringify(todos));

  editedTodo.textContent = edit;

};
