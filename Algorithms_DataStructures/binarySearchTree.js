class binarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  addNode(value) {
    let node = new Node(value);
    if(this.root == null) {
      this.root = node;
    } else {
      let cNode = this.root;
      this.addNodeHelper(cNode, node);
    }
  }
  
  addNodeHelper(currentNode, insertNode) {
    if(currentNode.value <= insertNode.value) {
      if(currentNode.right == null) {
        currentNode.right = insertNode;
      } else {
        this.addNodeHelper(currentNode.right, insertNode);
      }
    } else {
      if(currentNode.left == null) {
        currentNode.left = insertNode;
      } else {
        this.addNodeHelper(currentNode.left, insertNode);
      }
    }
  }

  findNode(value) {
    cNode = this.root;
    while(cNode !== null) {
      if(cNode.value == value) {
        return cNode;
      } else if(cNode.value < value) {
        cNode = cNode.right;
      } else {
        cNode = cNode.left;
      }
    }
    return cNode;
  }

  deleteNode(value) {
    if(this.root == null) {
      return null;
    }
    let cNode = this.root;
    this.deleteNodeHelper(cNode, value);
  }

  deleteNodeHelper(cNode, value) {
    if(cNode == null) {
      return cNode;
    }

    if(cNode.value < value) {
      cNode.right = this.deleteNodeHelper(cNode.right, value);
    } else if(cNode.value > value) {
      cNode.left = this.deleteNodeHelper(cNode.left, value);
    } else {
      if(cNode.left == null) {
        let temp = cNode.right;
        cNode = null;
        return temp
      } else if(cNode.right == null) {
        let temp = cNode.left;
        cNode = null;
        return temp;
      }

      let findSmallestBig = (node) => {
        let smallNode = node;
        while(smallNode.left != null) {
          smallNode = smallNode.left;
        }
        return smallNode
      }

      let replacementNode = findSmallestBig(cNode.right);
      cNode.value = replacementNode.value;
      cNode.right = this.deleteNodeHelper(cNode.right, replacementNode.value);
    }
    return cNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let treeHeight = (tree) => {
  if(tree == null) {
    return 0;
  }
  return Math.max(1 + treeHeight(tree.left), 1 + treeHeight(tree.right));
}

let BST = new binarySearchTree(50);
BST.addNode(30);
BST.addNode(20);
BST.addNode(40);
BST.addNode(70);
BST.addNode(60);
BST.addNode(80);
console.log(JSON.stringify(BST.root));
console.log(treeHeight(BST.root));
BST.deleteNode(20);
console.log(JSON.stringify(BST.root));
console.log(treeHeight(BST.root));
BST.deleteNode(30);
console.log(JSON.stringify(BST.root));
BST.deleteNode(50);
console.log(JSON.stringify(BST.root));
console.log(treeHeight(BST.root));
BST.deleteNode(80);
console.log(JSON.stringify(BST.root));
console.log(treeHeight(BST.root));
