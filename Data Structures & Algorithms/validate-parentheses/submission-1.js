class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let splitArr = s.split("");
        let checkedArr = [];
        let openParentheses = ["(", "[", "{"];
        let result = false;

        if(splitArr.length % 2 == 1){
            return false;
        }

        for(let i=0; i<splitArr.length; i++){
            if(openParentheses.includes(splitArr[i])){
                checkedArr.push(splitArr[i])
            } else if(splitArr[i] == ")" && checkedArr[checkedArr.length - 1] == "(" || splitArr[i] == "]" && checkedArr[checkedArr.length - 1] == "[" || splitArr[i] == "}" && checkedArr[checkedArr.length - 1] == "{"){
                checkedArr.pop();
                result = true;
            } else {
                result = false;
                break;
            }
        }

        if(checkedArr.length > 0){
            result = false;
        }

        return result;
    }
}
