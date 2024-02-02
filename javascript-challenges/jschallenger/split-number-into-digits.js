//https://jschallenger.com/javascript-practice/javascript-fundamentals/split-number-into-digits
function myFunction(a) {
  const strNum = a.toString().split("");
  let digitArr = [];
  strNum.forEach((element) => {
    digitArr.push(parseInt(element));
  });

  return digitArr;
}
console.log(myFunction(931));
