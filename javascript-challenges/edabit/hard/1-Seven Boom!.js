function sevenBoom(arr) {
  let number = "";
  for (let i = 0; i < arr.length; i++) {
    number += arr[i];
  }
  for (let i = 0; i < number.length; i++) {
    if (number[i] == "7") {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}
