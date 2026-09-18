class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = 0;

        for(let i=0; i < nums.length; i++){
            let check = nums[i] + 1;
            let count = 1;
            while(nums.includes(check)){
                console.log(check)
                count++;
                check++;
            }

            if(result < count) result = count

        }

        return result;
    }
}
