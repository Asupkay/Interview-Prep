const reverseCharArray = (charArray) => {
  let rightPointer = charArray.length - 1;
  let leftPointer = 0;
  while(leftPointer < rightPointer) {
    let temp = charArray[rightPointer];
    charArray[rightPointer] = charArray[leftPointer];
    charArray[leftPointer] = temp;
    rightPointer--;
    leftPointer++;
  }
  return charArray;
}

let array1 = ['a','l','e','x'];
let array2 = ['a','l','v','e','x'];

console.log(reverseCharArray(array1));
console.log(reverseCharArray(array2));
