class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let preStep = 1;
        let nextStep = 2;
        let count = 3;
        if(n == 1) return preStep;
        if(n == 2) return nextStep;
        while(count <= n){
            let temp = preStep;
            preStep = nextStep;
            nextStep = nextStep + temp; 

            count++;
        }

        return nextStep;
    }
}
