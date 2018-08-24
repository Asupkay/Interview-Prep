const mergeArrays = (array1, array2) => {
  let index1 = 0;
  let index2 = 0;
  let mergedArray = [];
  while(index1 < array1.length && index2 < array2.length) {
    if(array1[index1] > array2[index2]) {
      mergedArray.push(array2[index2]);
      index2++;
    } else {
      mergedArray.push(array1[index1]);
      index1++;
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

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
