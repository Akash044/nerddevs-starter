//https://jschallenger.com/javascript-practice/javascript-sets/value-present-in-set
function myFunction(set, val) {
  return [...set].includes(val); //set.has(val);
}

console.log(myFunction(new Set(["1", "2", "3"]), "2"));
