class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let checkedMap = new Map();

        for(let i=0; i<nums.length; i++){
            const needNum = checkedMap.get(target - nums[i]);

            if(needNum >= 0){
                return [i, needNum];
            } else {
                checkedMap.set(nums[i],i);
            }
        }

        return []
    }
}
