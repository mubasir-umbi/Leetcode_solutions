// 141. Linked List Cycle


  //Definition for singly-linked list.
  class ListNode1 {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

/**
 * Function to detect whether a linked list has a cycle.
 * @param head - The head of the linked list.
 * @returns True if there is a cycle, false otherwise.
 */
function hasCycle(head: ListNode1 | null): boolean {
    // Initialize two pointers, slow and fast, both starting at the head.
    let slow: ListNode | null = head;
    let fast = head;
    
    // Iterate through the linked list using two pointers.
    while (fast && fast.next) {
        // Move slow one step and fast two steps.
        slow = slow.next;
        fast = fast.next.next;

        // If there is a cycle, the fast pointer will eventually catch up to the slow pointer.
        if (fast === slow) {
            return true;
        }
    }

    // If there is no cycle, the fast pointer will reach the end of the list.
    return false;
}
