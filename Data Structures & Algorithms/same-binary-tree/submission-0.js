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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    checkSameTree(nodeP, nodeQ){
        if(!nodeP && !nodeQ){
            return true
        }
        if(!nodeP || !nodeQ || nodeP.val != nodeQ.val){
            return false
        }

        let check = this.checkSameTree(nodeP.left, nodeQ.left) && this.checkSameTree(nodeP.right, nodeQ.right);
        return check;

    }

    isSameTree(p, q) {
        return this.checkSameTree(p, q);
    }
}
