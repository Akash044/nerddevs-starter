//https://jschallenger.com/javascript-practice/javascript-objects/return-nested-property-object
function myFunction(obj) {
  return obj?.a?.b;
}
console.log(myFunction({ a: 1 }));
