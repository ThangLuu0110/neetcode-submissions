class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let checkedNums = new Map();

        for(let i = 0; i < nums.length; i++){
            let neededNums = target - nums[i];
            const result = checkedNums.get(neededNums)
            if(result >= 0){
                return [i, result];
            } else {
                checkedNums.set(nums[i], i);
            }
        }
    }
}
