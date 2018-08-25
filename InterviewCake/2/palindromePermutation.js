const isPalindromePermutation = (word) => {
  let palindrome = new Set();
  for(let i = 0; i < word.length; i++) {
    let letter = word[i];
    if(palindrome.has(letter)) {
      palindrome.delete(letter);
    } else {
      palindrome.add(letter);
    }
  }
  if(palindrome.size > 1) {
    return false;
  } else {
    return true;
  }
}

console.log(isPalindromePermutation("civic"));
console.log(isPalindromePermutation("ivicc"));
console.log(isPalindromePermutation("civil"));
console.log(isPalindromePermutation("livci"));
console.log(isPalindromePermutation("ivic"));

