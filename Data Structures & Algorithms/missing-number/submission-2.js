class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sortNums = nums.sort();
        for(let i=0; i<= sortNums.length; i++){
            if(sortNums[i] != i){
                return i;
            }
        }
    }
}
