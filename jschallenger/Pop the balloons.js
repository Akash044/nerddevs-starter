//https://jschallenger.com/javascript-dom-exercises/dom-fundamentals/pop-the-balloons-javascript-project

const list = document.getElementById("list");
list.addEventListener("mouseover", (event) => {
  if (event.target !== list) {
    event.target.style.visibility = "hidden";
  }
});
