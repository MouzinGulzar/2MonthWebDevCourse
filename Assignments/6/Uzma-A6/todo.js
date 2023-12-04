let btn = document.querySelector("#btn");
let todo = document.querySelector("#todo");
let todoList = document.querySelector("#todos");
let todoNum = document.querySelector("#todo-num");
let form = document.querySelector("#todo-form");
let added = new Date().toLocaleString("en-GB", { dateStyle: "short" });
let todos = [];

const delBtn = (id) => {
  return `<div class="btn btn-del" onclick=deleteTodo(${id})>Delete</div>`;
};

const editBtn = (id) => {
  return `<div class="btn btn-edit" onclick=editTodo(${id})>Edit</div>`;
};

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

function printTodos() {
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    let span = document.createElement("h2");
    span.textContent = todos[i].todo;

    li.setAttribute("class", `lists`);
    li.setAttribute("id", `todo-${i + 1}`);

    let div1 = document.createElement("div");
    div1.classList.add("main");
    let cattag = document.createElement("span");
    cattag.classList.add("cat-tag");
    cattag.textContent = todos[i].cat;
    let prtag = document.createElement("span");

    if(todos[i].priority == "high"){
      prtag.classList.add("priority-tag-high");
    }else if(todos[i].priority == "medium"){
      prtag.classList.add("priority-tag-medium");
    } else if(todos[i].priority == "low"){
      prtag.classList.add("priority-tag-low");
    }

    prtag.textContent = todos[i].priority;
    div1.appendChild(cattag);
    div1.appendChild(prtag);

    let div2 = document.createElement("div");
    div2.classList.add("bottom");
    let addedc = document.createElement("span");
    addedc.textContent = "Added:";
    let addeddate = document.createElement("span");
    addeddate.textContent = todos[i].added;
    let addeddue = document.createElement("span");
    
    if(todos[i].due != null) {
      addeddue.textContent = "Due:";
    }

    let duedate = document.createElement("span");
    duedate.textContent = todos[i].due;
    div2.appendChild(addedc);
    div2.appendChild(addeddate);
    div2.appendChild(addeddue);
    div2.appendChild(duedate);

    let div3 = document.createElement("div");
    div3.classList.add("btns");
    div3.innerHTML += editBtn(i + 1);
    div3.innerHTML += delBtn(i + 1);

    li.append(div1);
    li.append(span);
    li.append(div2);
    li.append(div3);

    todoList.append(li);
  }
}

printTodos();

function addTodo(due, todo, cat, priority) {
  todo = todo.trim();

  if (todo == "") {
    return;
  }

  let todoObj = {
    due: due,
    todo: todo,
    cat: cat,
    priority: priority,
    added: new Date().toLocaleString("en-GB", { dateStyle: "short" }),
  };

  todos.push(todoObj);
  
  localStorage.setItem("todos", JSON.stringify(todos));
  
  printTodos();

  todoList.scrollTop = todoList.scrollHeight;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);

  let due = formData.get("due-date") || null;
  let todo = formData.get("todo");
  let cat = formData.get("category");
  let priority = formData.get("priority");

  addTodo(due, todo, cat, priority);

  form.reset();
});

// DELETE BUTTON FUNCTIONALITY
const refreshIDs = () => {
  let lis = document.querySelectorAll("li");

  lis.forEach((li, index) => {
    li.setAttribute("id", `todo-${index + 1}`);

    li.querySelector(".btn-edit").setAttribute(
      "onclick",
      `editTodo(${index + 1})`
    );
    li.querySelector(".btn-del").setAttribute(
      "onclick",
      `deleteTodo(${index + 1})`
    );
  });
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
  let editedTodo = document.querySelector(`#todo-${index} h2`);
  let edit = prompt("Edit todo", editedTodo.textContent);

  edit = edit.trim();

  if (edit == "") {
    return;
  }

  todos[index - 1] = edit;
  localStorage.setItem("todos", JSON.stringify(todos));

  editedTodo.textContent = edit;
};

const delAllTodo = (index) => {
  let deletedLiList = document.querySelectorAll(".lists");

  // Iterate through the NodeList and remove each element
  deletedLiList.forEach((deletedLi) => {
    deletedLi.remove();
  });
  localStorage.removeItem("todos");
  todos = [];
  todoNum.textContent = 0;
  if (todos.length == 0) {
    document.querySelector(".message").classList.remove("hidden");
  }
};
