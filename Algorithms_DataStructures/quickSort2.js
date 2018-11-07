const quickSort = (array, low, high) => {
  if(low < high) {
    let middle = partition(array, low, high);

    quickSort(array, low, middle - 1);
    quickSort(array, middle + 1, high); 
  }
  return array;
}

const partition = (array, low, high) => {
  let wall = low; 
  let pivot = array[high];

  for(let i = low; i < high; i++) {
    if(array[i] < pivot) {
      swap(array, i, wall);
      wall++;
    }
  }
  swap(array, wall, high);
  return wall;
}

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log(quickSort([387, 224, 8920, 162, 73469], 0, 4));
