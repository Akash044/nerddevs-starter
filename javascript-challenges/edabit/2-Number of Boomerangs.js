function countBoomerangs(arr) {
  let cnt = 0;
  for (let curr = 0; curr < arr.length; curr++) {
    if (arr[curr] == arr[curr + 2] && arr[curr] != arr[curr + 1]) {
      cnt++;
    }
  }
  return cnt;
}
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
