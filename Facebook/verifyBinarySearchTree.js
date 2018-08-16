class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const verifyBSTree = (head, lowerBound, upperBound) => {
  lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound: Number.NEGATIVE_INFINITY;
  upperBound = (typeof upperBound !== 'undefined') ? upperBound: Number.POSITIVE_INFINITY;

  if(!head) {
    return true;
  }
  if(head.value >= upperBound || head.value <= lowerBound) {
    return false;
  }

  return verifyBSTree(head.left, lowerBound, head.value) && verifyBSTree(head.right, head.value, upperBound);
}

let bst = new BinaryTreeNode(10);
bst.insertLeft(6).insertLeft(2);
bst.insertRight(11)
console.log(verifyBSTree(bst));
bst.insertRight(3);
console.log(verifyBSTree(bst));
