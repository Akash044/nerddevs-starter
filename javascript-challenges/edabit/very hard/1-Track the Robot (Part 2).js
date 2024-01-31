function trackRobot(...steps) {
  let sumY = 0,
    sumX = 0,
    flagY = 1,
    flagX = 1;
  for (let i = 0; i < steps.length; i++) {
    if (i % 2 == 0) {
      sumY += steps[i] * flagY;
      flagY *= -1;
    } else {
      sumX += steps[i] * flagX;
      flagX *= -1;
    }
  }
  return [sumX, sumY];
}

console.log(trackRobot(-10, 20, 10));
