//https://jschallenger.com/javascript-practice/javascript-dates/check-if-two-dates-equal
function myFunction(a, b) {
  return a - b === 0; //a.getTime() === b.getTime()
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
