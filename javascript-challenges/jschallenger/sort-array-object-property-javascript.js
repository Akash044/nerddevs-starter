//https://jschallenger.com/javascript-practice/javascript-arrays/sort-array-object-property-javascript
function myFunction(arr) {
  return arr.sort((a, b) => a.b - b.b);
}

console.log(
  myFunction([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
