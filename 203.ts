// 203. Remove Linked List Elements


/// Definition for singly-linked list.

 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

/**
 * Removes all nodes with the specified value from a singly-linked list.
 * @param head The head of the linked list.
 * @param val The value to be removed.
 * @returns The head of the modified linked list.
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    // Check if the head is null
    if (head == null) {
        return null;
    }

    let cur: ListNode | null = head;
    let prev: any = null;

    // Traverse the linked list
    while (cur) {
        // Check if the current node's value matches the specified value
        if (cur.val == val) {
            // If there's a previous node, update its next pointer
            if (prev != null) {
                prev.next = cur.next;
            } else {
                // If prev is null, it means we are removing the head
                head = head.next;
            }
        } else {
            // Move to the next node
            prev = cur;
        }

        // Move to the next node in the linked list
        cur = cur.next;
    }

    // Return the head of the modified linked list
    return head;
}
