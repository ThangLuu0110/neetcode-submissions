class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arrangedStringS = s.split("").sort();
        let arrangedStringT = t.split("").sort();
        
        return JSON.stringify(arrangedStringS) == JSON.stringify(arrangedStringT);
    }
}
