//https://jschallenger.com/javascript-practice/javascript-objects/remove-property-from-object
function myFunction(obj) {
  let newObj = {};
  Object.keys(obj).forEach((property) => {
    if (property !== "b") {
      newObj = { ...newObj, [property]: obj[property] };
    }
  });
  return newObj; //{ b, ...rest } = obj; return rest;
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));
