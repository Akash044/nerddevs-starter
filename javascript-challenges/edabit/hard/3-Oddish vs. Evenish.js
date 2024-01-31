function oddishOrEvenish(num) {
  const numToString = "" + num;
  const digits = numToString.split("");
  const numLength = digits.length;
  const evenCnt = digits.filter((digit) => parseInt(digit) % 2 === 0);
  return (numLength - evenCnt.length) % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(3732223));
