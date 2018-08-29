const 2ndLargestElem = (tree) => {

  if(!tree.right && !tree.left) {
    throw new Error('Must be atleast 2 nodes');
  }

  let current = tree;
  while(current) {
    if(!current.right) {
      return findLargest(current.left);
    }

    if(!current.right.right && !current.right.left) {
      return current.value;
    }
    current = current.right;
  }
}

const findLargest = (tree) => {
  let current = tree;
  while(current.right) {
    current = current.right;
  }

  return current.value;
}
