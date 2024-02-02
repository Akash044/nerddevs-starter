//https://jschallenger.com/javascript-practice/javascript-arrays/return-average-of-array
function myFunction(arr) {
  return arr.reduce((last, curr) => (last += curr), 0) / arr.length;
}
