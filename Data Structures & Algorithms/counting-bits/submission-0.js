class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let output = [];
        let count = 0;
        while(count <= n){
            let sum = 0;
            let binaryNumb = Number(count.toString(2));
            while (binaryNumb) {
                sum += binaryNumb % 10;
                binaryNumb = Math.floor(binaryNumb / 10);
            }
            output.push(sum);
            count++;
        }

        return output;
    }
}
