const binarySearch = (array, value, start, stop) => {
  if(start > stop) {
    return -1;
  }
  let halfLength = Math.floor((stop - start)/2) + start;
  if(array[halfLength] == value) {
    return halfLength;
  }
  if(array[halfLength] < value) { 
    return binarySearch(array, value, halfLength + 1, stop);
  }
  if(array[halfLength] > value) { 
    return binarySearch(array, value, start, halfLength - 1);
  }
}

let array = [1,2,3,4,5];
console.log(binarySearch(array, 3, 0, array.length));
console.log(binarySearch(array, 2, 0, array.length));
console.log(binarySearch(array, 5, 0, array.length));
array = [1,2,3,4,5,6];
console.log(binarySearch(array, 3, 0, array.length));
console.log(binarySearch(array, 2, 0, array.length));
console.log(binarySearch(array, 5, 0, array.length));
