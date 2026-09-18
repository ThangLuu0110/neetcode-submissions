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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1 == null && list2 == null){
            return null
        }
        let listArr1 = [];
        let listArr2 = [];
        while(list1 != null){
            listArr1.push(list1.val);
            list1 = list1.next;
        }

        while(list2 != null){
            listArr2.push(list2.val);
            list2 = list2.next;
        }

        let combinedArr = listArr1.concat(listArr2).sort(function(a,b){
            return a - b;
        });
        let head = new ListNode(combinedArr[0]);
        let current = head;

        for (let i = 1; i < combinedArr.length; i++) {
            current.next = new ListNode(combinedArr[i]);
            current = current.next;
        }

        return head
    }
}
