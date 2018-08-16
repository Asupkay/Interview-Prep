const singleRiffleCheck = (shuffledDeck, half1, half2) => {
  if(!shuffledDeck || !half1 || !half2) {
    throw new Error('Must provide input for the deck, half1, and half2');
  }
  let indexHalf1 = 0;
  let indexHalf2 = 0;
  let indexDeck = 0;
  while(indexDeck < shuffledDeck.length) {
    if(shuffledDeck[indexDeck] === half1[indexHalf1]) {
      indexHalf1++;
    } else if(shuffledDeck[indexDeck] === half2[indexHalf2]) {
      indexHalf2++;
    } else {
      return false;
    }
    indexDeck++;
  }
  return true;
}

console.log(singleRiffleCheck([4, 1, 3, 2], [1,2], [3, 4]));
