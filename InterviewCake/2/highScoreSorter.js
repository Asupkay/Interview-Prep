const sortScores = (unsortedArray, HIGHEST_POSSIBLE_SCORE) => {
  let array = [];
  unsortedArray.forEach((score) => {
    if(array[score]) {
      array[score]++;
    } else {
      array[score] = 1;
    }
  });

  console.log(array);
  let sortedScore = [];
  for(let i = 0; i < array.length; i++) {
    while(array[i] > 0) {
      sortedScore.push(i);
      array[i]--;
    }
  } 
  console.log(sortedScore);
}

sortScores([37, 89, 41, 65, 91, 53]);
sortScores([37, 89, 41, 41, 65, 91, 53]);
