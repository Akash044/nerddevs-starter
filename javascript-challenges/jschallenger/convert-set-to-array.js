//https://jschallenger.com/javascript-practice/javascript-sets/convert-set-to-array
function myFunction(set) {
  return [...set];
}

console.log(myFunction(new Set([1, 2, 3])));
