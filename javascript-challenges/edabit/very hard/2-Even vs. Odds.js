function availableSpots(arr, num) {
  let cntEven = 0,
    cntOdd = 0;
  for (let i = 1; i < arr.length; i++) {
    if (num % 2 === 0 && (arr[i] % 2 === 0 || arr[i - 1] % 2 === 0)) cntEven++;
    else if (num % 2 !== 0 && (arr[i] % 2 !== 0 || arr[i - 1] % 2 !== 0))
      cntOdd++;
  }

  return num % 2 === 0 ? cntEven : cntOdd;
}
console.log(availableSpots([4, 4, 4, 4, 5], 7));
