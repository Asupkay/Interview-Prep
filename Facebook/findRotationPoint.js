const findRotationPoint = (wordArray) => {
  const firstWord = wordArray[0];

  let bottomBound = 0;
  let topBound = firstWord.length - 1;

  while(bottomBound < topBound) {
    let guessIndex = Math.floor(bottomBound + (topBound - bottomBound)/2);
    
    if(wordArray[guessIndex] >= firstWord) {
      bottomBound = guessIndex;
    } else {
      topBound = guessIndex;
    }
    if(bottomBound + 1 === topBound) {
      break;
    }
  }
  return topBound;
}

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(findRotationPoint(words));
