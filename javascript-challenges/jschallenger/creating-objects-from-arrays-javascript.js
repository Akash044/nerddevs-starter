//https://jschallenger.com/javascript-practice/javascript-objects/creating-objects-from-arrays-javascript
function myFunction(a, b) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    obj = { ...obj, [a[i]]: b[i] };
  }
  return obj; //a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
