let leftShiftArray = (array, rotations) => {
  for(let i = 0; i < rotations; i++) {
    array.push(array.shift());
  }
  return array;
}

console.log(leftShiftArray([1,2,3,4,5], 4).join(" "));
