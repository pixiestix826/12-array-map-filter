
/* globals items */

//calculate the average price of all items
//console.log the average price
var sumPrice = items.reduce((currentPrice, item) => {
  return currentPrice + item.price;
}, 0);

var avgPrice = sumPrice / items.length;

console.log(avgPrice);

//create an array of items that cost
//between $14.00 and $18.00 USD
var priceRange = items.filter((item) => {
  return item.price > 14 && item.price < 18;
}).map(function(item) {
  return item.title;
});

console.log('Items that cost between $14.00 USD and $18.00 USD:', priceRange);

//find the item with a "GBP" currency code and
//print its name and price. console.log the one found.
var euroItem = items.filter((item) => {
  return item.currencyCode === 'GBP';
}).map(function(item) {
  return item.title + ' costs ' + item.price;
});

console.log(euroItem);

//find the items made of wood
//console.log those items
var woodenItems = items.filter((item) => {
  return item.materials === 'wood';
}).map(function(item) {
  return item.title;
});

console.log(woodenItems, ' is made of wood.');
