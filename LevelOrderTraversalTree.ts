type TreeNode = {
  val: number;
  right: TreeNode;
  left: TreeNode;
};

function traverse(root: TreeNode) {
  if (!root) return null;
  let queue = [root];
  let res = [];
  while (queue.length) {
    let currentNode = queue.shift();
    res.push(currentNode);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return res;
}
