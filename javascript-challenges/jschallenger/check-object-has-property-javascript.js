//https://jschallenger.com/javascript-practice/javascript-objects/check-object-has-property-javascript
function myFunction(a, b) {
  const keys = Object.keys(a);
  return keys.includes(b);
}

console.log(myFunction({ x: "a", y: "b", z: undefined }, "z"));
