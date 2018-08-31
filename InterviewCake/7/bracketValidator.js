const bracketValidator = (string) => {
  let stack = [];
  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(' || string[i] === '[' || string[i] === '{') {
      stack.push(string[i]);
    }
    if(string[i] === ')' || string[i] === ']' || string[i] === '}') {
      let matchingParen = stack.pop();
      if(string[i] === ')') {
        if(matchingParen !== '(') {
          return false;
        }
      }
      if(string[i] === ']') {
        if(matchingParen !== '[') {
          return false;
        }
      }
      if(string[i] === '}') {
        if(matchingParen !== '{') {
          return false;
        }
      }
    }
  }
  if(stack.length > 0) {
    return false;
  }
  return true;
}

console.log(bracketValidator("{[]()}"));
console.log(bracketValidator("{[(])}"));
console.log(bracketValidator("{[}"));
console.log(bracketValidator("{[]}}"));
