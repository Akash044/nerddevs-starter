//https://jschallenger.com/javascript-practice/javascript-objects/extract-keys-from-object-javascript
function myFunction(a) {
  return Object.keys(a);
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));
