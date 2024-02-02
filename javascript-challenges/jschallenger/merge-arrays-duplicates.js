//https://jschallenger.com/javascript-practice/javascript-arrays/merge-arrays-duplicates
function myFunction(a, b) {
  const mergedArr = [...a, ...b];
  mergedArr.sort((a, b) => a - b);
  return [...new Set(mergedArr)];
}

console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
