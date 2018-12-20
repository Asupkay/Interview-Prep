const binarySearch = (array, value) => {
  let start = 0;
  let end = array.length - 1
  let middle = Math.floor((end - start)/2) + start;

  while(start <= end) {
    if(array[middle] == value) {
      return middle;
    }

    if(array[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((end - start)/2) + start;
  }

  return false;
}

let array = [1,2,3,4,5];
console.log(binarySearch(array, 3));
console.log(binarySearch(array, -2));
console.log(binarySearch(array, 4));
console.log(binarySearch(array, 5));
