function isPositiveDominant(a) {
  const uniqueElements = [...new Set(a)];
  let cnt = 0,
    zeroCnt = 0;
  uniqueElements.forEach((item) => {
    if (item > 0) cnt++;
    else if (item == 0) zeroCnt++;
  });
  return uniqueElements.length - (cnt + zeroCnt) < cnt;
}

console.log(isPositiveDominant([1, 1, 1, 1, -8, -7, -5, 5]));
