function getTotalPrice(groceries) {
  let totalPrice = 0;
  groceries.forEach(({ quantity, price }) => (totalPrice += quantity * price));

  return parseFloat(totalPrice.toFixed(1));
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
