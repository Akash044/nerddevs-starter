//https://jschallenger.com/javascript-practice/javascript-arrays/check-if-array-elements-are-equal
function myFunction(arr) {
  const uniqueElements = [...new Set(arr)];
  return uniqueElements.length === 1;
}

console.log(myFunction([true, true, true, true]));
