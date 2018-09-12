const findDuplicate = (array) => {
  //Get the last index
  let n = array.length - 1;
  
  //start from the end of the array
  let positionInCycle = n + 1;

  //Travel through the array for the length of the array to garuntee we are in the cycle
  for(let i = 0; i < n; i++) {
    positionInCycle = array[positionInCycle - 1];
  }

  //Remember where we are
  const rememberedPosition = positionInCycle;
  //Get one step farther into the cycle and increment the cycleStep count by 1
  let currentPositionInCycle = array[positionInCycle - 1];
  let cycleStepCount = 1;

  //While we haven't gotten back to our rememberedPosition keep cycling and incrementing cycleStepCoint
  while(currentPositionInCycle !== rememberedPosition) {
    currentPositionInCycle = array[currentPositionInCycle - 1];
    cycleStepCount++;
  }

  //Put a point beyond the start and one ahead
  let pointerStart = n + 1;
  let pointerAhead = n + 1;
  //Push the pointer ahead the length of cycle step coint
  for(let i = 0; i < cycleStepCount; i++) {
    pointerAhead = array[pointerAhead - 1];
  }

  //increment them ahead till they are equal
  while(pointerStart !== pointerAhead) {
    pointerStart = array[pointerStart - 1];
    pointerAhead = array[pointerAhead - 1];
  }

  //The position the pointer is pointing at is the number
  return pointerStart;
}

console.log(findDuplicate([3,1,2,2]));
