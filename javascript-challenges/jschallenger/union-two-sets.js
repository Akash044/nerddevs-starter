//https://jschallenger.com/javascript-practice/javascript-sets/union-two-sets
function myFunction(a, b) {
  const union = new Set(a);
  for (const num of b) {
    union.add(num);
  }
  return union;
}

console.log(
  myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
);
