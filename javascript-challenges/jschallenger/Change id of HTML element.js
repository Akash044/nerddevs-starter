//https://jschallenger.com/javascript-dom-exercises/dom-manipulation/change-id-html-element
const button = document.querySelector("#wrapper button");

const changeInput = () => {
  const input = document.querySelector("#inputEl");
  if (input) {
    input.value = "Hello World";
  }
};

button.addEventListener("click", changeInput);

const input = document.querySelector("#wrapper input");
input.setAttribute("id", "inputEl");
