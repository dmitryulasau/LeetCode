// https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function (word1, word2) {
  // Initialize variables to store the merged string and the lengths of the input strings.
  let mergedString = "";
  let len1 = word1.length;
  let len2 = word2.length;

  // Determine the maximum length between the two input strings.
  let maxLen = Math.max(len1, len2);

  // Iterate through both strings using a for loop.
  for (let i = 0; i < maxLen; i++) {
    // Add a character from word1 if it exists at the current index.
    if (i < len1) {
      mergedString += word1[i];
    }
    // Add a character from word2 if it exists at the current index.
    if (i < len2) {
      mergedString += word2[i];
    }
  }

  // Return the merged string.
  return mergedString;
};
