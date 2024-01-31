function isValidCoordinates(firstTriangle, secondTriangle) {
  let flag1 = false;
  let flag2 = false;
  if (firstTriangle[0] + firstTriangle[1] > firstTriangle[2]) flag1 = true;
  if (secondTriangle[0] + secondTriangle[1] > secondTriangle[2]) flag2 = true;
  return flag1 && flag2;
}
function doesTriangleFit(brick, hole) {
  brick.sort();
  hole.sort();
  if (isValidCoordinates(brick, hole)) {
    for (let i = 0; i < 3; i++) {
      if (brick[i] > hole[i]) return false;
    }
    return true;
  } else {
    return false;
  }
}
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
/**
 *[1, 1, 1], [2, 2, 2]
 *[1, 2, 3], [1, 2, 2]
 *[1, 2, 4], [1, 2, 6]
 */
