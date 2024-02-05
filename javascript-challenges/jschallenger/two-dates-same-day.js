//https://jschallenger.com/javascript-practice/javascript-dates/two-dates-same-day
function myFunction(a, b) {
  const dayForFirstDate = a.getTime() / (1000 * 60 * 60 * 24);
  const dayForSecondDate = b.getTime() / (1000 * 60 * 60 * 24);
  return dayForFirstDate % 7 === dayForSecondDate % 7;
}

console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02")));
