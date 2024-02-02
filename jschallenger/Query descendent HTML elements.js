//https://jschallenger.com/javascript-dom-exercises/dom-selector-methods/javascript-query-descendent-element
const buttonElem = document.getElementById("wrapper").lastChild;
const inputElem = document.getElementById("wrapper").firstChild;

buttonElem.addEventListener("click", () => {
  const oldText = inputElem.value;
  return (inputElem.value = oldText === "ON" ? "OFF" : "ON");
});
