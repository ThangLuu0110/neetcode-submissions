class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let digitsNumb = 0;
        for(let i=0; i<digits.length;i++){
            digitsNumb += digits[i] * Math.pow(10, digits.length-i-1)
        }
        
        digitsNumb += 1;
        return digits = String(digitsNumb).split('').map(Number); 

    }

}
