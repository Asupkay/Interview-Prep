const quickSort = (array, start, end) => {
  if(start >= end) {
    return;
  }

  const divide = partition(array, start, end);

  quickSort(array, start, divide - 1);
  quickSort(array, divide + 1, end);
}

const partition = (array, start, end) => {
  let wall = start;
  let pivot = array[end];

  for(let i = start; i < end; i++) {
    if(array[i] < pivot) {
      swap(array, i, wall);
      wall++;
    }
  }

  swap(array, wall, end);
  return wall;
}

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}


let array = [1,4,2,3,6,5];
quickSort(array, 0, 5);
console.log(array);
