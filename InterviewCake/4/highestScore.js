const sortScores = (unsortedScores, highestPossibleScore) => {
  let scoresArray = [];
  unsortedScores.forEach((score) => {
    let spotInArray = scoresArray[score];
    if(spotInArray) {
      scoresArray[score]++;
    } else {
      scoresArray[score] = 1;
    }
  });
  let sortedArray = [];
  scoresArray.forEach((score, index) => {
    while(score > 0) {
      sortedArray.push(index);
      score--;
    }
  });
  return sortedArray;
}

console.log(sortScores([55,10,8,3,55], 100));
