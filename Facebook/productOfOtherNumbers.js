const productOfOtherNumbers = (array) => {
  let productArray = [];
  sum = 1;
  for(let i = 0; i < array.length; i++) {
    productArray[i] = sum;
    sum *= array[i];
  }

  sum = 1;
  for(let i = array.length - 1; i >= 0; i--) {
    productArray[i] *= sum;
    sum *= array[i];
  }

  return productArray;
}

console.log(productOfOtherNumbers([1,0,3,4]));

