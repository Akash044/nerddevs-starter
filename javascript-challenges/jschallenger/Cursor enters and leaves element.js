//https://jschallenger.com/javascript-dom-exercises/events-and-user-interactions/cursor-enter-leave-event
const element = document.querySelector("#element");

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? "orange" : "black";
};

// type in your code here
element.addEventListener("mouseenter", () => toggleColor(true));
element.addEventListener("mouseout", () => toggleColor(false));
