//https://jschallenger.com/javascript-practice/javascript-fundamentals/times-character-occurs-string
function myFunction(a, b) {
  const elements = b.split("");
  const matchedElements = elements.filter((e) => e === a);
  return matchedElements.length;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);
