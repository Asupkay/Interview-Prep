const isBalanced = (tree) => {

  if (!tree) {
    return true;
  }

  const depths = [];

  let stack = [];
  stack.push([tree, 0]);
  while(stack.length > 0) {
    const nodePair = stack.pop();
    const node = nodePair[0];
    const height = nodePair[1];

    if(!node.left && !node.right) {
      if(depths.indexOf(height) < 0) {
        depths.push(height);
      }

      if(depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
        return false;
      }
    }

    if(node.left) {
      stack.push([node.left, height + 1]);
    }

    if(node.right) {
      stack.push([node.right, height + 1]);
    }
  }
  return true;
};
