class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checkedNums = [];

        for(let i=0; i<nums.length; i++){
            if(checkedNums.includes(nums[i])){
                return true;
            } else {
                checkedNums.push(nums[i]);
            }
        }

        return false;
    }
}
