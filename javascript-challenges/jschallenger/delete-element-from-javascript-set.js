//https://jschallenger.com/javascript-practice/javascript-sets/delete-element-from-javascript-set
function myFunction(set, val) {
  set.delete(val);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1));
