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

const superBalanced = (tree) => {
  //depth first search stack
  const nodes = [];
  //List of depth when we find them
  const depths = [];

  //Push on the first node that has a depth of 0
  nodes.push([tree, 0]);

  //While there are still nodes in the stack
  while(nodes.length) {
    //Pop off our pair and get the node and depth out of it
    let nodePair = nodes.pop();
    let node = nodePair[0];
    let depth = nodePair[1];

    //If the node has no left or right it is a leaf
    if(!node.left && !node.right) {
      //If the depth is not in the depth array push on the depth
      if(depths.indexOf(depth) < 0) {
        depths.push(depth);
      
        //If there are more than two depth or if there are two depth and they have a different of more then one return false
        if(depths.length > 2 || (depths.length == 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
    } else {
      //Push on the left and right into the stack incrementing depth by one
      if(node.left) {
        nodes.push([node.left, depth + 1]);
      }
 
      if(node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  //If we went through the whole thing without error return true
  return true;
}


