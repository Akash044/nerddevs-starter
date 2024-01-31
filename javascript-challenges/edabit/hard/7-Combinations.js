function combinations(...items) {
  let comb = 1;
  items.forEach((item) => {
    if (item) comb = comb * item;
  });
  return comb;
}
console.log(combinations(1, 2, 3));
