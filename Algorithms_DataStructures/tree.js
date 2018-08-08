class BinaryTree {
  constructor (node) {
    if(!(node instanceof Node)) {
      throw new Error('BinaryTree takes a node');
    }

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
    if(node instanceof Node) {
      this.left = node;
    } else {
      throw new Error('Must add Node');
    }
  }

  addRight(node) {
    if(node instanceof Node) {
      this.right = node;
    } else {
      throw new Error('Must add Node');
    }
  }
}

const node = new Node(10);
const node1 = new Node(12);
const node2 = new Node(13);
const node3 = new Node(14);
const binaryTree = new BinaryTree(node);


console.log(`Root Value: ${binaryTree.root.value}`);
console.log(`To String after adding node of 10: ${binaryTree.toString()}`)
binaryTree.root.addLeft(node1);
binaryTree.root.addRight(node2);
binaryTree.root.right.addRight(node3);
console.log(`Added more nodes: ${binaryTree.toString()}`)

console.log(binaryTree);
console.log(binaryTree instanceof BinaryTree);
console.log(2 instanceof BinaryTree);

try {
  binaryTree.root.left.addLeft(4);
} catch (e) {
  console.log("Caught that error");
}
