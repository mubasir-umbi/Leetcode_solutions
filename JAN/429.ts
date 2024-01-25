// 429. N-ary Tree Level Order Traversal


class Node1 {
    val: number;
    children: Node[] | null;

    constructor(val?: number, children?: Node[]) {
        this.val = (val === undefined ? 0 : val);
        this.children = (children === undefined ? null : children);
    }
}

/**
 * Perform a level-order traversal on an N-ary tree.
 * @param root The root of the N-ary tree.
 * @returns An array containing the values of the nodes in each level.
 */
function levelOrder(root: Node1 | null): number[][] {
    // Check if the root is null, return an empty array if true
    if (!root) return [];

    // Initialize a queue for the level-order traversal
    const queue: any= [];
    queue.push(root);

    // Initialize the result array to store values of each level
    const res: number[][] = [];

    // Continue the traversal while there are nodes in the queue
    while (queue.length) {
        // Get the number of nodes at the current level
        let size = queue.length;

        // Array to store values of the current level
        let values: number[] = [];

        // Process nodes at the current level
        for (let i = 0; i < size; i++) {
            // Remove the front node from the queue
            let cur = queue.shift();

            // Add the value of the current node to the values array
            values.push(cur.val);

            // Enqueue children of the current node for the next level
            if (cur.children) {
                for (let chd of cur.children) {
                    queue.push(chd);
                }
            }
        }

        // Add the values of the current level to the result array
        res.push(values);
    }

    // Return the result array containing values of each level
    return res;
}
