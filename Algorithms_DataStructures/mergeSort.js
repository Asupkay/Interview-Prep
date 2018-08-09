const mergeSort = (array) => {
  if(array.length === 1) {
    return array
  }

  let middle = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0,middle));
  let right = mergeSort(array.slice(middle,array.length));
  let sorted = [];
  let lIndex = 0;
  let rIndex = 0;
  while(lIndex != left.length && rIndex != right.length) {
    if(left[lIndex] >= right[rIndex]) {
      sorted.push(right[rIndex]);
      rIndex++;
    }
    if(left[lIndex] < right[rIndex]) {
      sorted.push(left[lIndex]);
      lIndex++;
    }
  }
  
  while(lIndex <  left.length) {
    sorted.push(left[lIndex])
    lIndex++;
  }

  while(rIndex < right.length) {
    sorted.push(right[rIndex])
    rIndex++;
  }

  return sorted
}

console.log(mergeSort([6,5,4,3,2,1]));
console.log(mergeSort([7,6,5,4,3,2,1]));
