//https://jschallenger.com/javascript-practice/javascript-objects/object-has-property-defined-value-javascript
function myFunction(a, b) {
  return Boolean(a[b]);
}

console.log(myFunction({ x: "a", y: "b", z: undefined }, "z"));
