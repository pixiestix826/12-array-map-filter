//calculate the average price of all items
//console.log the average price
var sumPrice = items.reduce((currentPrice, item) => {
  return currentPrice + item.price;
}, 0);

var avgPrice = sumPrice / items.length;

console.log(avgPrice);
