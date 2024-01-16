//897. Increasing Order Search Tree
//-----------------------------------------------

// TreeNode class represents a node in a binary tree
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// Function to convert a binary search tree to a skewed, increasing order binary search tree
function increasingBST(root: TreeNode | null): TreeNode | null {
    // Create a dummy node to serve as the starting point of the resulting tree
    const dummyNode = new TreeNode();
    // 'cur' is a pointer to the current node in the resulting tree
    let cur = dummyNode;

    // Helper function for in-order traversal and tree transformation
    const inOrder = (r: TreeNode | null) => {
        // Base case: If the current node is not null
        if (r) {
            // Traverse the left subtree
            inOrder(r.left);
            // Create a new node with the current node's value
            cur.right = new TreeNode(r.val);
            // Move the 'cur' pointer to the newly created node
            cur = cur.right;
            // Traverse the right subtree
            inOrder(r.right);
        }
    };

    // Start in-order traversal from the root of the original tree
    inOrder(root);
    // Return the root of the resulting skewed, increasing order binary search tree
    return dummyNode.right;
}
