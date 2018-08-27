const findRotationPoint = (words) => {
  let startIndex = 0;
  let endIndex = words.length - 1;
  let startWord = words[0];
  while(startIndex <= endIndex) {
    if(startIndex == endIndex) {
      return startIndex;
    }

    let halfWay = Math.floor((endIndex - startIndex)/2) + startIndex;
    if(words[halfWay] < startWord) {
      endIndex = halfWay;
    } else {
      startIndex = halfWay + 1; 
    }
  }
  return -1;
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

words.sort();
console.log(findRotationPoint(words));
