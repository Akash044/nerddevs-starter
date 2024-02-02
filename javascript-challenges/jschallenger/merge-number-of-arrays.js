//https://jschallenger.com/javascript-practice/javascript-arrays/merge-number-of-arrays
function myFunction(...arrays) {
  let combinedArr = new Array();
  arrays.forEach((arr) => {
    combinedArr = [...combinedArr, ...arr];
  });
  return combinedArr;
}

console.log(myFunction([1, 2, 3], [4, 5, 6]));
