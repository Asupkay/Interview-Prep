const getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const shuffle = (theArray) => {
  let swapIndex = 0;
  while(swapIndex != theArray.length) {
    let random = getRandom(swapIndex, theArray.length - 1);
    if(random !== swapIndex) {
      let temp = theArray[random];
      theArray[random] = theArray[swapIndex];
      theArray[swapIndex] = temp;
    }
  }
} 
