// 654. Maximum Binary Tree
//------------------------------------------


/**
 * Definition for a binary tree node.
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

/**
 * Given an array of integers, constructs the maximum binary tree from the input array.
 * 
 * @param nums Array of integers
 * @returns The root node of the constructed maximum binary tree
 */
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    // Base case: If the array is empty, return null (empty tree)
    if (nums.length === 0) {
        return null;
    }

    /**
     * Helper function to find the maximum element in an array,
     * construct a TreeNode with that element, and recursively
     * build the left and right subtrees.
     * 
     * @param arr Array of integers
     * @returns The root node of the constructed subtree
     */
    const findMaxAndConstructTree = (arr: number[]): TreeNode | null => {
        // Base case: If the array is empty, return null (empty subtree)
        if (arr.length === 0) {
            return null;
        }

        let max = Number.MIN_SAFE_INTEGER;
        let ind = -1;

        // Find the index of the maximum element in the array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                ind = i;
                max = arr[i];
            }
        }

        // Create a new TreeNode with the maximum element
        const newNode = new TreeNode(arr[ind]);
        
        // Recursively build the left and right subtrees
        const left = arr.slice(0, ind);
        const right = arr.slice(ind + 1);

        newNode.left = findMaxAndConstructTree(left);
        newNode.right = findMaxAndConstructTree(right);

        return newNode;
    };

    // Call the helper function to construct the maximum binary tree
    return findMaxAndConstructTree(nums);
}

// Example usage:
const nums = [3, 2, 1, 6, 0, 5];
const rootNode = constructMaximumBinaryTree(nums);
console.log(rootNode);
