class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let stringSplited = s.replaceAll(" ", "").toLowerCase().replace(/[^a-z0-9]/gi, '').split('');
        
        for(let i = 0; i< stringSplited.length; i++){
            let n = stringSplited.length-1-i;
            if(stringSplited[i] != stringSplited[n]){
                return false;
            }
        }

        return true;
    }
}
