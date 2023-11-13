// DARK MODE FUNCTIONALITY
let btn = document.querySelector("#myBtn");

btn.addEventListener("click", function () {
  // Add dark-mode class to body if it's not there else remove it
  document.body.classList.toggle("dark-mode");

  // Change button text content
  if (btn.textContent == "Switch to Light Mode") {
    // If button text is "Switch to Light Mode"
    btn.textContent = "Switch to Dark Mode";
    // Change it to "Switch to Dark Mode"
  } else {
    btn.textContent = "Switch to Light Mode"; // Else change it to "Switch to Light Mode"
  }
});

// FONT SIZE FUNCTIONALITY
console.log(parseInt(window.getComputedStyle(document.body).fontSize));

// Select the buttons
let increaseBtn = document.querySelector("#increase");
let decreaseBtn = document.querySelector("#decrease");

// add event listerners to the buttons
increaseBtn.addEventListener("click", function () {
  let currentFS = parseInt(window.getComputedStyle(document.body).fontSize);

  let newFS = currentFS + 1 + "px";
  document.body.style.fontSize = newFS;
});

decreaseBtn.addEventListener("click", function () {
  let currentFS = parseInt(window.getComputedStyle(document.body).fontSize);

  let newFS = currentFS - 1 + "px";

  document.body.style.fontSize = newFS;
});
