const quickSort = (array, start, end) => {
  if(start >= end) {
    return;
  }  

  let divide = partition(array, start, end);

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
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}


let array = [1, 5, 3, 7, 2, 4];

quickSort(array, 0, 5);
console.log(array);
