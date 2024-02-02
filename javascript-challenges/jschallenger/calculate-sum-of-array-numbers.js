//https://jschallenger.com/javascript-practice/javascript-arrays/calculate-sum-of-array-numbers
function myFunction(a) {
  return a.reduce((last, curr) => (last += curr), 0);
}
