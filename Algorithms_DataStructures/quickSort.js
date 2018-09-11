
const quickSort = (array, left, right) => {
  //If left is more than or equal to right it is the smallest denomination which means it is sorted
  if(left < right) {
    return array;
  }

  //Make the pivot the farthest right
  pivot = array[right];
  //Make split all the way left and start checking from the cSpot
  let cSpot = left;
  let split = left;
  //Go from left to right
  while(cSpot < right) {
    //If the cSpot it less than pivot swap is with the thing at the one at split and increment the split
    if(array[cSpot] < pivot) {
      let temp = array[cSpot];
      array[cSpot] = array[split];
      array[split] = temp; 
      split++;
    }
    cSpot++;
  }
  //Swap the pivot into place
  array[right] = array[split];
  array[split] = pivot;
  //Quicksort the left
  quickSort(array, left, split - 1);
  //quicksort the right
  quickSort(array, split + 1, right);
  return array
  
}

let unsortArray = [2, 1, 3, 4];
let sorted = quickSort(unsortArray, 0, unsortArray.length - 1);
console.log(sorted);
let unsortedArray = [9,5,10,4,15,32,64,2,23,1];
let sortedArray = quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(sortedArray);
