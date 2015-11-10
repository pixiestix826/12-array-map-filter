//calculate the average price of all items
//console.log the average price
var sumPrice = items.reduce((currentPrice, item) => {
  return currentPrice + item.price;
}, 0);

var avgPrice = sumPrice / items.length;

console.log(avgPrice);

//create an array of items that cost
//between $14.00 and $18.00 USD
var cheap = items.map((item) => {
  if (items.price) {
    item.price > 14.00 && item.price < 18.00;
  }
});
console.log('Items that cost between $14.00 USD and $18.00 USD:', cheap);
