class BinaryTree {
  constructor (node) {
    this.root = node;
  }

  toString() {   
    if(this.root == null) {
      return "";
    }
    return `(${this.toStringHelper(this.root.left)} ${this.toStringHelper(this.root.right)})<-${this.root.value}`
  }

  toStringHelper(node) {
    if(node == null) {
      return "null";
    }
    return `(${this.toStringHelper(node.left)} ${this.toStringHelper(node.right)})<-${node.value}`
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(node) {
    this.left = node;
  }

  addRight(node) {
    this.right = node;
  }
}

const node = new Node(10);
const node1 = new Node(12);
const node2 = new Node(13);
const node3 = new Node(14);
const binaryTree = new BinaryTree(node);
console.log(binaryTree.root.value);
console.log(binaryTree.toString())
binaryTree.root.left = node1;
binaryTree.root.right = node2;
binaryTree.root.right.right = node3;
console.log(binaryTree.toString())

