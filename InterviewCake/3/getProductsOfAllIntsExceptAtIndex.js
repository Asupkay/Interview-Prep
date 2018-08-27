const getProductsOfAllIntsExceptAtIndex = (array) => {
  let products = [];
  let cProduct = 1;
  for(let i = 0; i < array.length; i++) {
    products.push(1);
    products[i] *= cProduct;
    cProduct *= array[i];
  }
  cProduct = 1;
  for(let i = array.length - 1; i >= 0; i--) {
    products[i] *= cProduct;
    cProduct *= array[i];
  }

  return products;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7 , 3, 4]));
