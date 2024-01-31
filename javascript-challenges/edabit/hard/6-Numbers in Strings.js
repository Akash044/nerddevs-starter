function numInStr(arr) {
  const re = /\d+/;
  const numOfStringWithNum = arr.filter((str) => re.exec(str) !== null);
  return numOfStringWithNum;
}

console.log(numInStr(["this is a test", "test1"]));
