/*The "surpasser" of an element in an array is defined as the number of elements that are to the "right" and bigger than itself. 

Example: 
Array: 
[2, 7, 5, 5, 2, 7, 0, 8, 1] 
The "surpassers" are 
[5, 1, 2, 2, 2, 1, 2, 0, 0] 

Question: Find the maximum surpasser of the array. 

In this example, maximum surpasser = 5*/

let surpasser = (numArray) => {
  let surpasserArray = [];
  for(let checking = 0; checking < numArray.length; checking++) {
    let checkNum = numArray[checking];
    let surpassers = 0;
    for(let against = checking + 1; against < numArray.length; against++) {
      let againstNum = numArray[against];
      if(checkNum < againstNum) {
        surpassers++;
      }
    }
    surpasserArray.push([surpassers, checkNum]);
  }
  surpasserArray.sort();
  return surpasserArray[numArray.length - 1][1]; 
}

console.log(surpasser([2, 7, 5, 5, 2, 7, 0, 8, 1]));
console.log(surpasser([1, 3, 7, 2, 3, 4, 2, 9, 0]));
