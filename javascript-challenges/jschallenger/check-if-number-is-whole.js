//https://jschallenger.com/javascript-practice/javascript-fundamentals/check-if-number-is-whole
function myFunction(a) {
  const toString = "" + a;
  return !toString.includes("."); //a - Math.floor(a) === 0
}

console.log(myFunction(1.123));
