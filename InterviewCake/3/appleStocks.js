const getMaxProfit = (stockPrices) => {
  
  if(stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  let lowestPrice = stockPrices[0];
  let highestDifference = 0;
  for(let i = 1; i < stockPrices.length; i++) {
    if(stockPrices[i] < lowestPrice) {
      lowestPrice = stockPrices[i];
    }
    if(stockPrices[i] - lowestPrice > highestDifference) {
      highestDifference = stockPrices[i] - lowestPrice;
    }
  }
  return highestDifference;
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
console.log(getMaxProfit([9, 8, 7, 6, 5, 4]));
console.log(getMaxProfit([4, 5, 6, 7, 8, 9]));

