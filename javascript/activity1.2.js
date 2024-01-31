// code

/**
 * method to get array ordered by total
 * Calculates total for each item and sort by total
 * @param {{amount:Number, quantity:Number}[]} inputArr - An array of objects, each containing an amount and quantity properties.
 * @returns {{amount:Number, quantity:Number, Total:Number}[]} A new array of objects sorted by Total in descending order.
 */
function orderByTotal(inputArr) {
  // calculate total
  let newArray = inputArr.map((item) => ({
    amount: item.amount,
    quantity: item.quantity,
    Total: item.amount * item.quantity,
  }));

  // sort by total
  newArray.sort((a, b) => b.Total - a.Total);

  return newArray;
};
// ----------------------------

// demo

let salesArray = [
  { amount: 100, quantity: 2 },
  { amount: 200, quantity: 10 },
  { amount: 50, quantity: 10 },
  { amount: 10, quantity: 20 },
  { amount: 15, quantity: 30 },
];

let orderedArr = orderByTotal(salesArray);
console.log(orderedArr);
