/**
 * 590. N-ary Tree Postorder Traversal
 * ------------------------------------------------------
 * 
 * Performs a postorder traversal on a tree.
 * 
 */
var postorder = function(root) {
    // Initialize an array to store the values in postorder
    const arr = [];

    // Define a recursive function for postorder traversal
    const traverse = (node) => {
        // Check if the current node is not null
        if (node) {
            // If the current node has children, recursively traverse each child
            if (node.children) {
                for (let child of node.children) {
                    traverse(child);
                }
            }

            // Push the value of the current node to the array in postorder
            arr.push(node.val);
        }
    };

    // Start the postorder traversal from the root
    traverse(root);

    // Return the array containing the values in postorder
    return arr;
};
