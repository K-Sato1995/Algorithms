// Define Binary Tree
class BinaryTreeNode {
  value: number
  right: BinaryTreeNode | null
  left: BinaryTreeNode | null

  constructor(value: number) {
    this.value = value
    this.right = null
    this.left = null
  }
}

const findHeight = (node: TreeNode | null) => {
  if (node == null) return 0

  const lefth = findHeight(node.left)
  const righth = findHeight(node.right)

  if (lefth > righth) {
    return lefth
  } else {
    return righth
  }
}
