const validBTree = (tree) => {
  const stack = [];

  let omaxLimit = Number.POSITIVE_INFINITY;
  let olowLimit = Number.NEGATIVE_INFINITY;

  stack.push([tree, olowLimit, omaxLimit]);

  while(stack.length) {
    let currentPair = stack.pop();
    let currentNode = currentPair[0];
    let lowLimit = currentPair[1];
    let maxLimit = currentPair[2];
    if(currentNode.value > maxLimit || currentNode.value < lowLimit) {
      return false;
    }
    
    if(currentNode.left) {
      stack.push([currentNode.left, lowLimit, currentNode.value]); 
    }

    if(currentNode.right) {
      stack.push([currentNode.right, currentNode.value, maxLimit]);
    }
  }
  return true;
}
