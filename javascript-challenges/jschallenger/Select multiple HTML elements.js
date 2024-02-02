//https://jschallenger.com/javascript-dom-exercises/dom-selector-methods/javascript-query-multiple-elements
// assign the correct elements to the variable
const listItems = document.getElementById("list").childNodes;

const handleHover = (event) => {
  return (event.target.innerText = "ON");
};
if (listItems.length > 1) {
  listItems.forEach((item) => item.addEventListener("mouseover", handleHover));
}
