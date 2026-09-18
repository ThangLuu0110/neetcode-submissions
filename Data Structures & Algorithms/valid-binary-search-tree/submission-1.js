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
     * @return {boolean}
     */
    isValidBST(root) {
        let sortedArray = [];

        function orderArray(node){
            if(node === null){
                return null
            }

            orderArray(node.left);

            sortedArray.push(node.val);

            orderArray(node.right);
        }

        orderArray(root)

        for(let i = 0; i < sortedArray.length; i++){
            if(sortedArray[i] >= sortedArray[i+1]){
                return false
            }
        }

        return true;

    }
}
