class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let splitString = s.split('');
        let checkString = [];
        let longest = 0;

        for(let i=0; i < splitString.length; i++){
            if(!checkString.includes(splitString[i])){
                checkString.push(splitString[i])
            } else {
                longest = longest > checkString.length ? longest : checkString.length;
                let index = checkString.indexOf(splitString[i]);
                checkString.splice(0, index + 1);
                checkString.push(splitString[i])
            }
        }

        return longest > checkString.length ? longest : checkString.length;
    }
}