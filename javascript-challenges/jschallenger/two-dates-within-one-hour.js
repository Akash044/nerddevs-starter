//https://jschallenger.com/javascript-practice/javascript-dates/two-dates-within-one-hour
function myFunction(a, b) {
  const hourForFirstDate = a.getTime() / (1000 * 60 * 60);
  const hourForSecondDate = b.getTime() / (1000 * 60 * 60);
  return Math.abs(hourForFirstDate - hourForSecondDate) <= 1;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
