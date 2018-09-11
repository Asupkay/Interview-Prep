const addOneToArray = (array) => {
  let carry = 1;
  for(let i = array.length - 1; i >= 0; i--) {
    array[i] = array[i] + carry;
    if(array[i] != 10) {
      carry = 0;
      break;
    } else {
      array[i] = 0;
    }
  }
  if(carry === 1) {
    array.unshift(1);
  }
  return array;
}

console.log(addOneToArray([9,9,9,9,9]));
console.log(addOneToArray([1,2,3]));
