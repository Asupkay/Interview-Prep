const getRandom = (floor, ceiling) => {
  return Math.floor((Math.random() * (ceiling - floor + 1)) + floor);
}

const inPlaceShuffle = (array) => {

  if(array.length <= 1) {
    return;
  }

  let beginning = 0;
  let end = array.length - 1;
  
  while(beginning !== end) {
    let randomIndex = getRandom(beginning, end);
    let randomNumber = array.splice(randomIndex, 1);
    array.unshift(randomNumber[0]);
    beginning++;
  }
}

const fisherYatesShuffle = (array) => {
  if(array.length <= 1) {
    return;
  }

  for(let i = 0; i < array.length - 1; i++) {
    let randomIndex = getRandom(i, array.length - 1);

    if(randomIndex != i) {
      let temp = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = temp;
    }
  }
}

let array = [1,2,3,4];
inPlaceShuffle(array);
console.log(array);
let array2 = [4,3,2,1];
fisherYatesShuffle(array2)
console.log(array2);
