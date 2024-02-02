//https://jschallenger.com/javascript-dom-exercises/dom-fundamentals/checkbox-check
const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  const checkBox = document.querySelector("#checkbox");
  checkBox.checked = true;
});
