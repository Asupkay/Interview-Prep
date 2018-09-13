const mergeSort = (array) => {
  if(array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  return merge (
    mergeSort(left),
    mergeSort(right)
  );
}

const merge = (left, right) => {
  let result = [];
  let rightIndex = 0;
  let leftIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while(leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while(rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

console.log(mergeSort([5,7,2,6,9,2,5]));
const partition = (array, low, high) => {
  let pivot = high;
  let wall = low;

  for( let i = low; i < high; i++) {
    console.log(array, low, high);
    if(array[i] < array[pivot]) {
      console.log(i, wall);
      swap(array, i, wall);
      wall++;
    }
  }

  swap(array, wall, pivot);
  return wall;

}

const swap = (array, pos1, pos2) => {
  let temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

const quickSort = (array, left, right) => {
  if(left < right) {
    let split = partition(array, left, right);
    quickSort(array, left, split - 1);
    quickSort(array, split + 1, right);
  }

  return array;
  
}



console.log(quickSort([5,7,2,6,9,2,5], 0, 6));

