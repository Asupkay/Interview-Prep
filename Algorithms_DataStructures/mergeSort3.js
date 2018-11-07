const mergeSort = (array) => {
  if(array.length <= 1) {
    return array;
  }

  console.log(array);
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  return merge (
    mergeSort(left),
    mergeSort(right)
  );
}

const merge = (array1, array2) => {
  let array = [];
  let index1 = 0;
  let index2 = 0;

  console.log(array1,array2);
  while(index1 < array1.length && index2 < array2.length) {
    if(array1[index1] <= array2[index2]) {
      array.push(array1[index1]);
      index1++;
    } else {
      array.push(array2[index2]);
      index2++
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

console.log(mergeSort([6, 5, 1, 2, 3, 4]));
