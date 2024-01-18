/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Function to delete nodes with duplicates, leaving only one occurrence of each unique value.
 * @param head - The head of the linked list.
 * @returns The head of the modified linked list.
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    // If the linked list is empty, return null.
    if (head === null) {
        return null;
    }
    
    // Initialize pointers and counters.
    let cur = head; // Current node
    let prev: ListNode | null = null; // Previous node
    let next = cur.next; // Next node
    let c = 1; // Counter for consecutive duplicate values.

    // Iterate through the linked list.
    while (next !== null) {
        // Check if the current node has the same value as the next node.
        if (cur.val === next.val) {
            next = next.next; // Move to the next node.
            c++; // Increment the counter for consecutive duplicate values.
        } else {
            // If there are duplicates, adjust pointers to remove duplicates.
            if (c > 1) {
                if (prev === null) {
                    // If the duplicates are at the beginning, update the head.
                    head = next;
                } else {
                    // Otherwise, skip the duplicates.
                    prev.next = next;
                }
                cur = next;
                next = cur.next;
                c = 1; // Reset the counter.
            } else {
                // If no duplicates, move to the next nodes.
                prev = cur;
                cur = next;
                next = cur.next;
                c = 1; // Reset the counter.
            }
        }
    }

    // Handle duplicates at the end of the linked list.
    if (c > 1 && prev !== null) {
        prev.next = null; // Remove duplicates at the end.
    }

    // If all nodes have duplicates, return null.
    if (c > 1 && prev === null) {
        return null;
    }

    // Return the head of the modified linked list.
    return head;
}
