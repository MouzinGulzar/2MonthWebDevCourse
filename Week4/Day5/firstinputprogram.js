function linceseEligibilty() {
  let age = document.querySelector("#ageInput").value;

  if (age == "" || isNaN(age)) {
    alert("Please enter a number");
    return;
  }

  if (age < 18) {
    alert("Not eligible for driving");
  } else if (age > 70) {
    alert("Not eligible for driving");
  } else {
    alert("Eligible for driving");
  }
}
