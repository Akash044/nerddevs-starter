//https://jschallenger.com/javascript-dom-exercises/dom-manipulation/remove-element-from-dom
const button = document.querySelector("#button");

const removeRedCircle = () => {
  const redCircle = document.getElementById("red");
  redCircle.remove();
};

button.addEventListener("click", removeRedCircle);
