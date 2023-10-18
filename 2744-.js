// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

var maximumNumberOfStringPairs = function (words) {
  // Create a map to store the reversed versions of words and their frequencies
  const reversedMap = new Map();

  // Initialize a variable to keep track of the maximum number of pairs
  let maxPairs = 0;

  for (const word of words) {
    // Reverse the current word
    const reversedWord = word.split("").reverse().join("");

    // Check if the reversed word is in the map
    if (reversedMap.has(reversedWord) && reversedMap.get(reversedWord) > 0) {
      // If it is, decrement its frequency in the map and increment the maxPairs
      reversedMap.set(reversedWord, reversedMap.get(reversedWord) - 1);
      maxPairs++;
    } else {
      // If it's not, add the original word to the map
      if (!reversedMap.has(word)) {
        reversedMap.set(word, 0);
      }
      reversedMap.set(word, reversedMap.get(word) + 1);
    }
  }

  return maxPairs;
};
