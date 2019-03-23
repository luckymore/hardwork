/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 *            5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
 */
function hasPathSum(root, sum) {
  if (!root) return false   
  console.log(root.val)

  if (!root.left && !root.right) {  // 如果是叶子节点
    return sum === root.val
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}

var root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7
      },
      right: {
        val: 2
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 13
    },
    right: {
      val: 4,
      right: {
        val: 1
      }
    }
  }
}

hasPathSum(root, 20)
