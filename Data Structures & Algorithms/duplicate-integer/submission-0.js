class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checkedArr = []

        for(let i=0; i<nums.length; i++){
            if(checkedArr.includes(nums[i])){
                return true;
            } else {
                checkedArr.push(nums[i])
            }
        }

        return false;
    }
}
