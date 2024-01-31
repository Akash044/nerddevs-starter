function zeroesToEnd(a) {
  let pre = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      a[pre] = a[i];
      pre++;
    }
  }
  for (i = pre; i < a.length; i++) {
    a[i] = 0;
  }
  return a;
}
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
