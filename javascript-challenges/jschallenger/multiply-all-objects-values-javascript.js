//https://jschallenger.com/javascript-practice/javascript-objects/multiply-all-objects-values-javascript
function myFunction(a, b) {
  let obj = {};
  Object.keys(a).forEach((pro) => {
    obj = { ...obj, [pro]: a[pro] * b };
  });
  return obj;
  /**
  return Object.entries(a).reduce((acc, [key, val]) => {
   	return { ...acc, [key]: val * b };
   }, {});
  */
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));
