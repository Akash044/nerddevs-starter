//https://jschallenger.com/javascript-practice/javascript-fundamentals/remove-first-characters-string-javascript
function myFunction(a) {
  const chars = a.split("");
  chars.splice(0, 3, "");

  return chars.join("");
}

console.log(myFunction("abcdefg"));
