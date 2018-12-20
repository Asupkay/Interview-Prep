const mergeSort = (array) => {
  if(array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length/2);

  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle, array.length))
  );
}

const merge = (array1, array2) => {
  let mergedArray = [];

  let index1 = 0;
  let index2 = 0;
  while(index1 < array1.length && index2 < array2.length) {
    if(array1[index1] < array2[index2]) {
      mergedArray.push(array1[index1]);
      index1++;
    } else {
      mergedArray.push(array2[index2]);
      index2++;
    }
  }

  while(index1 < array1.length) {
    mergedArray.push(array1[index1]);
    index1++;
  }

  while(index2 < array2.length) {
    mergedArray.push(array2[index2]);
    index2++;
  }

  return mergedArray;
}

console.log(mergeSort([2,7,3,5,1]));
