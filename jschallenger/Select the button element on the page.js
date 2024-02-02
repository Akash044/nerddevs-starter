//https://jschallenger.com/javascript-dom-exercises/dom-selector-methods

const buttonElem = document.getElementById("button");
buttonElem.addEventListener("click", () => {
  const oldText = buttonElem.innerText;
  return (button.innerText = oldText === "ON" ? "OFF" : "ON");
});
