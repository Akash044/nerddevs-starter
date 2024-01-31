function getDays(date1, date2) {
  const time1 = new Date(date1).getTime(); // get time in ms
  const time2 = new Date(date2).getTime(); // get time in ms
  const totalMSecInADay = 1000 * 60 * 60 * 24;
  const days = (time2 - time1) / totalMSecInADay;
  return days;
}
console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2050"))
);
