class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        let firstStringArr = s.split("").sort();
        let secondStringArr = t.split("").sort();


        for(let i=0; i< firstStringArr.length; i++){
            if(firstStringArr[i] != secondStringArr[i]){
                return false;
            }
        }

        return true;
    }
}
