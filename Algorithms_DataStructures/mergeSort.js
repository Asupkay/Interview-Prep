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

const mergeSort2 = (array) => {
  //If the array is of length 1 it is already sorted
  if(array.length === 1) {
    return array;
  }
  
  //Get the middle of the array and slice it into two along that array
  let middle = Math.floor(array.length/2);
  let left = array.slice(0,middle);
  let right = array.slice(middle, array.length);

  return merge(
    //Merge sort those two halves and the merge sort them again
    mergeSort2(left),
    mergeSort2(right),
  )
}

merge = (left, right) => {
  //Make a result array for the complete solution
  let result = [];
  //Left and right index
  let lIndex = 0;
  let rIndex = 0;
  
  //Walk down the array depending which one is bigger push it onto results
  while(lIndex < left.length && rIndex < right.length) {
    if(left[lIndex] <= right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      rIndex++;
    }
  }

  //Clean up the rest
  while(lIndex < left.length) {
    result.push(left[lIndex]);
    lIndex++;
  }

  //Clean up the rest
  while(rIndex < right.length) {
    result.push(right[rIndex]);
    rIndex++;
  }

  return result
}

console.log(mergeSort2([7,6,5,4,3,2,1]));
