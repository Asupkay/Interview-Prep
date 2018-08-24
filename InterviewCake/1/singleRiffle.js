const singleRiffle = (half1, half2, shuffledDeck) => {
  let index1 = 0;
  let index2 = 0; 
  let shuffledIndex = 0;
  while(shuffledIndex != shuffledDeck.length - 1) {
    if(index1 < half1.length && half1[index1] === shuffledDeck[shuffledIndex]) {
      index1++;
    } else if(index2 < half2.length && half2[index2] === shuffledDeck[shuffledIndex]) {
      index2++;
    } else {
      return false;
    }
    shuffledIndex++;
  }
  return true;
}

console.log(singleRiffle([1,2,3,4,5],[5,6,7,8,9,10],[1,5,2,3,6,7,8,9,4,5,10]));
console.log(singleRiffle([1,2,3,4,5],[5,6,7,8,9,10],[1,5,10,3,6,7,8,9,4,5,2]));
