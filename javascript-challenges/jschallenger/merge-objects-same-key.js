//https://jschallenger.com/javascript-practice/javascript-objects/merge-objects-same-key
function myFunction(x, y) {
  let { b, ...rest } = y;
  return { ...x, d: b, ...rest };
}

console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
