function valueInTree(tree, val) {
  const elements = tree.flat(Infinity);
  const matchedEl = elements.find((el) => el === val);
  return matchedEl !== undefined;
}
const arr1 = [3, [8, [5, null, null], null], [7, null, null]];
console.log(valueInTree(arr1, 7));
