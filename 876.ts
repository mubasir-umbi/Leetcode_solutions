//876. Middle of the Linked List
//------------------------------------------



// Definition for singly-linked list.

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Finds the middle node of a linked list using the two-pointer approach.
 * @param head The head of the linked list.
 * @returns The middle node of the linked list.
 */
function middleNode(head: ListNode | null): ListNode | null {
    // Initialize two pointers, 'slow' and 'fast', both starting at the head of the linked list.
    let slow = head;
    let fast = head;

    // Move 'slow' one step at a time and 'fast' two steps at a time until 'fast' reaches the end or becomes null.
    while (fast !== null && fast.next !== null) {
        slow = slow.next; 
        fast = fast.next.next;
    }

    // The position of 'slow' at this point will be the middle node.
    return slow;
}
