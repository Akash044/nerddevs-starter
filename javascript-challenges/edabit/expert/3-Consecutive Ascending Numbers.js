function ascending(str) {
  const strSize = str.length;

  for (let i = 1; i < strSize; i++) {
    let pre = str.slice(0, i);
    let cnt = 0;
    let groupSize = i;

    for (let j = i; j < strSize; j = j + i) {
      if (strSize % i == 0) {
        groupSize = parseInt(strSize / i);
        const element = str.slice(j, j + i);
        if (parseInt(element) - parseInt(pre) === 1) {
          cnt++;
          pre = element;
        }
      }
    }
    if (cnt === groupSize - 1) {
      return true;
    }
    cnt = 0;
  }
  return false;
}
console.log(ascending("666667"));
