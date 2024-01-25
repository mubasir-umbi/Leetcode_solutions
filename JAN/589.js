/**
 * 589. N-ary Tree Preorder Traversal
 * --------------------------------------------
 * 
 * 
 * Performs a preorder traversal on a tree.
 * 
 */
var preorder = function(root) {
    // Initialize an array to store the values in preorder
    const arr = [];

    // Define a recursive function for preorder traversal
    const traverse = (node) => {
        // Check if the current node is not null
        if (node) {
            // Push the value of the current node to the array in preorder
            arr.push(node.val);

            // If the current node has children, recursively traverse each child
            if (node.children) {
                for (let child of node.children) {
                    traverse(child);
                }
            }
        }
    };

    // Start the preorder traversal from the root
    traverse(root);

    // Return the array containing the values in preorder
    return arr;
};
