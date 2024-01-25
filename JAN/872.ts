/**
 * 872. Leaf-Similar Trees
 * --------------------------------------
 * 
 * 
 * Checks if the leaf sequences of two binary trees are similar.
 * 
 * @param {TreeNode | null} root1 - The root of the first binary tree
 * @param {TreeNode | null} root2 - The root of the second binary tree
 * @returns {boolean} - True if the leaf sequences are similar; otherwise, false
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // Define a recursive function to find and collect the leaf values of a binary tree
    const find = (r: TreeNode | null, leaves: number[]): number[] => {
        if (r) {
            // If the current node is a leaf, push its value to the leaves array
            if (r.left == null && r.right == null) {
                leaves.push(r.val);
            }

            // Recursively find and collect leaf values from the left and right subtrees
            find(r.left, leaves);
            find(r.right, leaves);
        }
        return leaves;
    };

    // Find and collect the leaf values for both binary trees
    const leaves1 = find(root1, []);
    const leaves2 = find(root2, []);

    // Check if the leaf sequences are similar by comparing their string representations
    return leaves1.toString() === leaves2.toString();
}
