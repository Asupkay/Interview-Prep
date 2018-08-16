let array = ['a', 'l', 'e', 'x'];
array.reverse();
console.log(array);

const reverseArray = (array) => {
  let beginningIndex = 0;
  let endingIndex = array.length - 1;
  while(beginningIndex < endingIndex) {
    let temp = array[beginningIndex];
    array[beginningIndex] = array[endingIndex];
    array[endingIndex] = temp;
    beginningIndex++;
    endingIndex--;
  }
  return array;
}

reverseArray(array);
console.log(array);
