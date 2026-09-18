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
     * @return {void}
     */
    reorderList(head) {
        //Split linked list
        let slow = head
        let fast = head.next

        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }

        //Reverse second list
        let second = slow.next
        slow.next = null
        let prev = null
        while(second != null){
            let tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        }

        //Merge two list
        let first = head
        second = prev
        while(second != null){
            let tmp1 = first.next
            let tmp2 = second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
        }
    }
}
