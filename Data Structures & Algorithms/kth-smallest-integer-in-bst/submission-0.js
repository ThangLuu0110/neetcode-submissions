/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */

    kthSmallest(root, k) {
        let sortedArray = [];

        function inOrderArray(node){
            if(node === null){
                return null;
            }

            inOrderArray(node.left);

            sortedArray.push(node.val);

            inOrderArray(node.right);
        }

        inOrderArray(root);

        return sortedArray[k-1];
    }
}
