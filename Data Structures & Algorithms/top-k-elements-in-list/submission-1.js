class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let checkMap = new Map();
        let result = []

        //Set into map
        for(let i=0; i<nums.length; i++){
            if(!checkMap.has(nums[i])){
                checkMap.set(nums[i], 1);
            } else {
                let value = checkMap.get(nums[i]) + 1
                checkMap.set(nums[i], value);
            }
        }

        //Order Map
        let sortedMap = new Map([...checkMap.entries()].sort((a, b) => b[1] - a[1]));
        const iterator = sortedMap.entries();

        //Push key into Arr
        for(let i = 1; i<=k; i++){
            result.push(Number(iterator.next().value[0]))
        }

        return result
        
    }
}
