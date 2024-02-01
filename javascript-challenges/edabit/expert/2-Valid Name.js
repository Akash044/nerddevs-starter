function checkDotConditions(word1, word2, ind, noOfWords) {
  if (
    word1[0] !== word1[0].toUpperCase() ||
    word2[0] !== word2[0].toUpperCase() ||
    (word1.length === 2 && ind < noOfWords && word2.length > 2) ||
    word1.length > 2
  ) {
    return false;
  } else {
    return true;
  }
}
function validName(name) {
  let flag = false;
  const words = name.split(" ");

  const noOfWords = words.length;

  if (noOfWords == 1 || noOfWords > 3) return false;

  for (let i = 0; i < noOfWords - 1; i++) {
    if (
      words[i][words[i].length - 1] === "." &&
      !checkDotConditions(words[i], words[i + 1], i + 1, noOfWords - 1)
    ) {
      return false;
    }
    if (words[i].length === 1 || words[i][0] !== words[i][0].toUpperCase()) {
      return false;
    }
  }
  if (words[noOfWords - 1][0] === "." || words[noOfWords - 1].length === 2) {
    return false;
  }
  return true;
}

console.log(validName("Herb. George W."));
