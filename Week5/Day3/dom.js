// const insertBtn = document.querySelector("#btnInsert");
// const removeBtn = document.querySelector("#btnRemove");
// const img = document.querySelector("#img");

// insertBtn.addEventListener("click", () => {
//   img.setAttribute("src", "myImg.png");
// });

// removeBtn.addEventListener("click", () => {
//   img.removeAttribute("src");
// });

// Element.setAttribute("class", "myClass");
// Element.removeAttribute("class");

// Element.classList.add("myClass");
// Element.classList.remove("myClass");

let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let todoList = document.querySelector("#todos");

function addTodo() {
  let item = input.value;
  let li = document.createElement("li"); //<li></li>

  li.textContent = item; //<li>item</li>

  todoList.prepend(li);

  input.value = "";
}

btn.addEventListener("click", addTodo);

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
});
