const isBinarySearchTree = (treeRoot, lowerBound, upperBound) => {
  lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
  upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;

  if(!treeRoot) {
    return true;
  }

  if(treeRoot.value < lowerBound || treeRoot.value > upperBound) {
    return false
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}
