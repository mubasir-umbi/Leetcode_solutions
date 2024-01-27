// 160. Intersection of Two Linked Lists



 // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

/**
 * Find the intersection node of two linked lists.
 * @param headA The head of the first linked list.
 * @param headB The head of the second linked list.
 * @returns The intersection node or null if no intersection.
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // Initialize pointers curA and curB to the heads of the linked lists
    let curA: ListNode | null = headA;
    let curB: ListNode | null = headB;

    // Traverse the linked lists until an intersection is found or both reach the end
    while (curB) {
        // Check if the current nodes in both linked lists are the same (intersection found)
        if (curA == curB) {
            return curA;
        }

        // Move curA to the next node if it exists, otherwise reset it to the head of the first list
        if (curA.next != null) {
            curA = curA.next;
        } else {
            curA = headA;

            // Move curB to the next node in the second linked list
            curB = curB.next;
        }
    }

    // If no intersection is found, return null
    return null;
}
