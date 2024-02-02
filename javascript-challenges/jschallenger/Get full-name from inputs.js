//https://jschallenger.com/javascript-dom-exercises/dom-fundamentals/get-fullname-from-inputs
const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  document.getElementById("fullName").value = firstName + " " + lastName;
});
