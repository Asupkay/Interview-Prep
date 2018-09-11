
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

const partition = (arr, pivot, left, right) => {
  //Get the value of the pivot
  let pivotValue = arr[pivot];
  //Make the split the farthest left
  let split = left;
  //Make an index to iterate over the array
  let cSpot = left;

  while(cSpot < right) {
    //If the current is less than the pivot value you we need swap it with the one right of the wall
    if(arr[cSpot] < pivotValue) {
      swap(arr, cSpot, split);
      //Increment the wall
      split++;
    }
    cSpot++;
  }
  //Swap the pivot to its proper position
  swap(arr, split, pivot);
  return split;
}

const quickSort2 = (arr, left, right) => {
  //If left is less than right there is still work to do
  if(left < right) {
    //Sort the pieces of the array
    let split = partition(arr, right, left, right);

    //Do that for the sub arrays
    quickSort2(arr, split + 1, right);
    quickSort2(arr, left, split - 1);
  }
  //Return the overall array
  return arr;
}

const swap = (arr, left, right) => {
  let temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;
}

let sortedArray = quickSort2(unsortedArray, 0, unsortedArray.length - 1);
console.log(sortedArray);

