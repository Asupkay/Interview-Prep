const singleRiffle = (half1, half2, shuffledDeck) => {
  let half1Index = 0;
  let half2Index = 0;
  let shuffledDeckIndex = 0;
  while(shuffledDeckIndex < shuffledDeck.length) {
    if(shuffledDeck[shuffledDeckIndex] == half1[half1Index]) {
      half1Index++;
    } else if(shuffledDeck[shuffledDeckIndex] == half2[half2Index]) {
      half2Index++;
    } else {
      return false;
    }
    shuffledDeckIndex++;
  }
  return true;
}

console.log(singleRiffle([1,2], [3,4,5,6], [1,4,2,3,5,6]));
