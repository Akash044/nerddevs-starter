function getLength(arr) {
  const flattenArray = arr.flat(Infinity);
  return flattenArray.length;
}

console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
