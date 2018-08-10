const quickSort = (array, left, right) => {
  if(left < right) {
    return array;
  }

  pivot = array[right];
  let cSpot = left;
  let split = left;
  while(cSpot < right) {
    if(array[cSpot] < pivot) {
      let temp = array[cSpot];
      array[cSpot] = array[split];
      array[split] = temp; 
      split++;
    }
    cSpot++;
  }
  array[right] = array[split];
  array[split] = pivot;
  quickSort(array, left, split - 1);
  quickSort(array, split + 1, right);
  return array
  
}

let unsortArray = [2, 1, 3, 4];
let sorted = quickSort(unsortArray, 0, unsortArray.length - 1);
console.log(sorted);
let unsortedArray = [9,5,10,4,15,32,64,2,23,1];
let sortedArray = quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(sortedArray);
