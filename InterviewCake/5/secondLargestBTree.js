const findSecondLargest = (tree) => {
  if(tree.right == null && tree.left == null) {
    throw new Error('Must have atleast 2 nodes');
  }
  let pair = findLargestAndParent(tree);

  if(pair[1].left) {
    return findLargestAndParent(pair[1].left)[1];
  } else {
    return pair[0];
  }
};

const findLargestAndParent = (tree) => {
  let parent = tree;
  let head = tree.right;

  if(head == null) {
    parent = null;
    head = tree;
  }

  while(head.right != null) {
    parent = parent.right;
    head = head.right;
  }

  return [parent, head];
};

const findLargest = (tree) => {
  let node = tree;
  while(node.right) {
    node = node.right;
  }

  return node;
}

const findSecondLargest2 = (tree) => {
  let current = tree;
  while(current) {
    if(!current.right) {
      return findLargest(tree.left)
    }
    if(current.right.right == null && current.right.left == null) {
      return current.value;
    }
    current = current.right;
  }
};
