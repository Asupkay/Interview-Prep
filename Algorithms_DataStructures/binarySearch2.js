const binarySearch = (array, val) => {
  let start = 0;
  let stop = array.length - 1;
  let middle = Math.floor((stop - start)/2)

  while(array[middle] != val && start < stop) {
    if(array[middle] < val) {
      start = middle + 1;
    }

    if(array[middle] > val) {
      stop = middle - 1;
    }

    middle = Math.floor((stop + start)/2);
  }

  return array[middle] == val ? middle : -1
}
