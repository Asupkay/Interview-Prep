const highestProduct = (arrayOfInts) => {
  if(arrayOfInts.length < 3) {
    throw new Error('must have at least 3');
  }

  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  for(let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];
    highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * current, lowestProductOf2 * current);
    highestProductOf2 = Math.max(lowest * current, highestProductOf2, highest * current);
    lowestProductOf2 = Math.min(lowest * current, lowestProductOf2, highest * current);
    lowest = Math.min(lowest, current);
    highest = Math.max(highest, current);
  }

  return highestProductOf3;
}

console.log(highestProduct([1, 10, -5, 1, -100]));
console.log(highestProduct([-10, -10, 1, 3, 2]));
