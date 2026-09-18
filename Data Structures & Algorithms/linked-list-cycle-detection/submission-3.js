/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head
        let fast = head

        while(fast != null && fast.next != null){
            slow = slow.next
            if(slow == null){
                return false
            }

            fast = fast.next.next

            if(fast == slow){
                return true
            }
        }

        return false
    }
}
