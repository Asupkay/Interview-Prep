const hasPalindromePermutation = (word) => {
  let letters = new Set();
  for(let i = 0; i < word.length; i++) {
    if(letters.has(word[i])) {
      letters.delete(word[i]);
    } else {
      letters.add(word[i])
    }
  }
  return letters.size <= 1;
}

console.log(hasPalindromePermutation('apple'));
