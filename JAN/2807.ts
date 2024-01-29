//2807. Insert Greatest Common Divisors in Linked


 // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let cur: any = head;

    // Iterate through the linked list until the last node is reached
    while (cur.next) {
        // Extract values from the current node and its next node
        let val1 = cur.val;
        let val2 = cur.next.val;

        // Find the minimum of the two values
        let min = Math.min(val1, val2);

        // Iterate from the minimum value to 1 to find the greatest common divisor
        for (let i = min; i > 0; i--) {
            // Check if i is a common divisor for both values
            if (val1 % i == 0 && val2 % i == 0) {
                // Create a new node with the greatest common divisor
                const newNode = new ListNode(i);

                // Insert the new node between the current node and its next node
                newNode.next = cur.next;
                cur.next = newNode;

                // Exit the loop since the GCD has been inserted
                break;
            }
        }

        // Move the pointer to the node after the newly inserted GCD node
        cur = cur.next.next;
    }

    return head;
};

 