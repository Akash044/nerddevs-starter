//https://jschallenger.com/javascript-practice/javascript-dates/number-days-between-two-dates
function myFunction(a, b) {
  return Math.abs((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
