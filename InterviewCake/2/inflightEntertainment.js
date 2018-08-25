const moviePicker  = (flightLength, movieLengths) => {
  let set = new Set();
  for(let i = 0; i < movieLengths.length; i++) {
    let firstMovieLength = movieLengths[i];
    if(set.has(flightLength - firstMovieLength)) {
      return true;
    }
    set.add(firstMovieLength);
  }
  return false;
}

console.log(moviePicker(60, [15, 10, 2, 50, 45]));
console.log(moviePicker(60, [15, 10, 2, 3, 5]));
