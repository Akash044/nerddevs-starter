//https://jschallenger.com/javascript-practice/javascript-arrays/return-longest-string-in-array
function myFunction(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}

console.log(myFunction(["help", "me"]));
