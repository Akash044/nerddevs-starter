//https://jschallenger.com/javascript-practice/javascript-objects/creating-objects-dynamic-key-javascript
function myFunction(a, b) {
  return { [a]: b };
}

console.log(myFunction("b", "b"));
