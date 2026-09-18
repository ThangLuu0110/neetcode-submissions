class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lPointer = 0;
    let rPointer = 1;
    let bestPrice = 0;

    while(rPointer < prices.length){
        let checkPrices = 0;
        if(prices[lPointer] > prices[rPointer]){
            lPointer++;
            rPointer = lPointer + 1;
        } else {
            checkPrices = prices[rPointer] - prices[lPointer];
            if(bestPrice < checkPrices) {
                bestPrice = checkPrices;
            } 
            rPointer++;
        }

    }

    return bestPrice;
    }
}
