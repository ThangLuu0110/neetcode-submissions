/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let swapped;
        do {
            swapped = false
            for(let i=0; i < intervals.length-1 ; i++){
                if(intervals[i].start > intervals[i+1].start){
                    let tmp = intervals[i];
                    intervals[i] = intervals[i+1];
                    intervals[i+1] = tmp
                    swapped = true
                }
            }
        } while (swapped)

        console.log(intervals)

        for(let i=0; i < intervals.length; i++){
            for(let j=i+1; j < intervals.length; j++){
                if(intervals[i].end > intervals[j].start){
                    return false
                }
            }
        }

        return true
    }
}
