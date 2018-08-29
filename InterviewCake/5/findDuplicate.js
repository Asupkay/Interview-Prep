const findDuplicate = (array) => {
  let n = array.length - 1;
  let positionInCycle = n + 1;
  for(let i = 0; i < n; i++) {
    positionInCycle = array[positionInCycle - 1];
  }

  const rememberedPosition = positionInCycle;
  let currentPositionInCycle = array[positionInCycle - 1];
  let cycleStepCount = 1;

  while(currentPositionInCycle !== rememberedPosition) {
    currentPositionInCycle = array[currentPositionInCycle - 1];
    cycleStepCount++;
  }

  let pointerStart = n + 1;
  let pointerAhead = n + 1;
  for(let i = 0; i < cycleStepCount; i++) {
    pointerAhead = array[pointerAhead - 1];
  }

  while(pointerStart !== pointerAhead) {
    pointerStart = array[pointerStart - 1];
    pointerAhead = array[pointerAhead - 1];
  }

  return pointerStart;
}

console.log(findDuplicate([3,1,2,2]));
