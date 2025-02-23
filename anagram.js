class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //check if the length of the two arrays are equal
        if(s.length !== t.length) {
            return false;
        }
        //sort both string and compare them
        return s.split('').sort().join('') === t.split('').sort().join('');
    }
}