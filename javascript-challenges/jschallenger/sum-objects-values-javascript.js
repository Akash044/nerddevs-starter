//https://jschallenger.com/javascript-practice/javascript-objects/sum-objects-values-javascript
function myFunction(a) {
  return Object.values(a).reduce((pre, curr) => (pre += curr), 0);
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));
