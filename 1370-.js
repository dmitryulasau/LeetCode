// https://leetcode.com/problems/increasing-decreasing-string/

var sortString = function(s) {
    const charCount = new Array(26).fill(0);
        for (const char of s) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    
        let result = '';
        while (result.length < s.length) {
            // Append smallest character
            for (let i = 0; i < 26; i++) {
                if (charCount[i] > 0) {
                    result += String.fromCharCode('a'.charCodeAt(0) + i);
                    charCount[i]--;
                }
            }
    
            // Append largest character
            for (let i = 25; i >= 0; i--) {
                if (charCount[i] > 0) {
                    result += String.fromCharCode('a'.charCodeAt(0) + i);
                    charCount[i]--;
                }
            }
        }
    
        return result;
    };