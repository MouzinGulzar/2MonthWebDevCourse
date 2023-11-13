// ACCESSING ELEMENTS

// let heading1 = document.getElementById("myHeading");

// let headings = document.getElementsByClassName("heading");

// let headings2 = document.getElementsByTagName("h1");
// console.log(headings2[0].textContent);
// console.log(headings2[1].textContent);
// console.log(headings2[2].textContent);

// document.querySelectorAll(".heading")
// document.querySelector("#myHeading")
// document.querySelector("h1")

// MODIFYING ELEMENTS
// let form = document.querySelector("#myForm");
// form.innerHTML = `<input type="password" id>`;
// form.innerHTML += `<button>Show</button>`;

// let paragraph = document.querySelector("#myPara");
// paragraph.innerHTML = "<h1> is used for heading 1";

// SHOW HIDE PASSWORD INPUT
let passInput = document.querySelector("#password");
let btn = document.querySelector("#showhide");

function showhide() {
  if (btn.textContent == "Show") {
    btn.textContent = "Hide";
    passInput.setAttribute("type", "text");
  } else {
    btn.textContent = "Show";
    passInput.setAttribute("type", "password");
  }
}
