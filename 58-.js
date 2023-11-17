// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  // Trim any leading or trailing spaces
  s = s.trim();

  // Find the last space in the string
  let lastSpaceIndex = s.lastIndexOf(" ");

  // If there are no spaces, the entire string is the last word
  // Otherwise, extract the last word using substring
  let lastWord = lastSpaceIndex === -1 ? s : s.substring(lastSpaceIndex + 1);

  // Return the length of the last word
  return lastWord.length;
};
