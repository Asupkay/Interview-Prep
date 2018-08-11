class AVLTree {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    if(this.head == null) {
      this.head = new Node(value);
    } else {
      this.head = this.addNodeHelper(this.head, value);
    }
  }

  addNodeHelper(cNode, value) {
    if(cNode.value > value) {
      if(cNode.left == null) {
        cNode.left = new Node(value);
      } else {
        cNode.left = this.addNodeHelper(cNode.left, value); 
      }
      cNode.height = 1 + Math.max(this.getHeight(cNode.left), this.getHeight(cNode.right));
    } else {
      if(cNode.right == null) {
        cNode.right = new Node(value);
      } else {
        cNode.right = this.addNodeHelper(cNode.right, value); 
      }
      cNode.height = 1 + Math.max(this.getHeight(cNode.left), this.getHeight(cNode.right));
    }

    const balance = this.getBalance(cNode);

    if(balance > 1 && value < cNode.left.value) {
      return this.rightRotate(cNode);
    }

    if(balance < -1 && value > cNode.right.value) {
      return this.leftRotate(cNode);
    }

    if(balance > 1 && value > cNode.left.value) {
      cNode.left = this.leftRotate(cNode.left);
      return this.rightRotate(cNode);
    }
  
    if(balance < -1 && value < cNode.right.value) {
      cNode.right = this.rightRotate(cNode.right);
      return this.leftRotate(cNode);
    }
    return cNode;
  }

  leftRotate(node) {
    let y = node.right;
    let T2 = y.left

    y.left = node;
    node.right = T2

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right))
  
    return y;
  }

  rightRotate(node) {
    let y = node.left;
    let T2 = y.right

    y.right = node;
    node.left = T2

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right))
  
    return y;
  }
  getHeight(root) {
    if(root == null) {
      return 0;
    }
    return root.height;
  }

  getBalance(node) {
    if(node == null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

let avlTree = new AVLTree();
avlTree.addNode(10);
avlTree.addNode(20);
console.log(JSON.stringify(avlTree));
avlTree.addNode(30);
avlTree.addNode(40);
avlTree.addNode(50);
avlTree.addNode(25);
console.log(JSON.stringify(avlTree));
