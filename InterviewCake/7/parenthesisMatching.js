const matchParen = (sentence, startPosition) => {
  let stack = 0;
  let position = startPosition + 1;
  stack++;
  while(stack > 0 && position < sentence.length ) {
    if(sentence[position] === ')') {
      stack--;
    } else if(sentence[position] === '(') {
      stack++;
    }
    position++;
  }

  if(position >= sentence.length) {
    return -1;
  } else {
    return position - 1;
  }
}

console.log(matchParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));
