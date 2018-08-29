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

const validBinaryTree = (tree) => {
  let nodes = [];
  nodes.push([tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]);
  while(nodes.length) {
    let nodePair = nodes.pop();
    let node = nodePair[0];
    let lowerBound = nodePair[1];
    let upperBound = nodePair[2];

    if(node.value > upperBound || node.value < lowerBound) {
      return false;
    } else {
      if(node.left) {
        nodes.push([node.left, lowerBound, node.value]);
      }

      if(node.right) {
        nodes.push([node.right, node.value, upperBound]);
      }
    }
  }
  return true;
}

let bTree = new BinaryTreeNode(50);
let lNode = bTree.insertLeft(30);
lNode.insertLeft(20);
lNode.insertRight(60);
let rNode = bTree.insertRight(80);
rNode.insertLeft(70);
rNode.insertRight(90);

console.log(validBinaryTree(bTree));
