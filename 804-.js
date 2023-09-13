// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
    const morseCodeMapping = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
        "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
        "-.--", "--.."
    ];
    
    const transformedSet = new Set();
    
    for (const word of words) {
        let transformed = '';
        for (const char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            transformed += morseCodeMapping[index];
        }
        transformedSet.add(transformed);
    }
    
    return transformedSet.size;
};