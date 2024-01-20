// 104. Maximum Depth of Binary Tree



 // Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

/**
 * Function to find the maximum depth of a binary tree.
 * @param root - The root of the binary tree.
 * @returns The maximum depth of the binary tree.
 */
function maxDepth(root: TreeNode | null): number {
    let depth = 0; // Initialize the maximum depth
    let c = 0; // Initialize the current depth

    /**
     * Recursive function to traverse the binary tree and update the maximum depth.
     * @param r - The current node in the traversal.
     */
    const traverse = (r: TreeNode | null) => {
        if (r) {
            c++; // Increment the current depth for each node
            if (!r.left && !r.right) {
                depth = Math.max(c, depth); // Update maximum depth for leaf nodes
            }
            traverse(r.left); // Recursively traverse the left subtree
            traverse(r.right); // Recursively traverse the right subtree
            c--; // Decrement the current depth when backtracking
        }
    };

    traverse(root); // Start the traversal from the root
    return depth; // Return the maximum depth of the binary tree
}
