class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checkedNums = new Set();

        for(let i=0; i<nums.length; i++){
            if(checkedNums.has(nums[i])){
                return true;
            } else {
                checkedNums.add(nums[i]);
            }
        }

        return false;
    }
}
