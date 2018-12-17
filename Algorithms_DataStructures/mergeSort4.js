const mergeSort = (array) => {
  if(array.length <= 1) {
    return array;
  }

  console.log(array);
  let middle = Math.floor(array.length/2);

  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle, array.length)),
  );
}

const merge = (array1, array2) => {
  let array = [];
  
  let index1 = 0;
  let index2 = 0;
  while(index1 < array1.length && index2 < array2.length ) {
    if(array1[index1] < array2[index2]) {
      array.push(array1[index1]);
      index1++;
    } else {
      array.push(array2[index2]);
      index2++;
    }
  }

  while(index1 < array1.length) {
    array.push(array1[index1]);
    index1++;
  }

  while(index2 < array2.length) {
    array.push(array2[index2]);
    index2++;
  }

  return array;
}

console.log(mergeSort([2,1,6,3,8,5]));
