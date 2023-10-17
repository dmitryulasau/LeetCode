// https://leetcode.com/problems/count-asterisks/description/

var countAsterisks = function (s) {
  let inPair = false; // Flag to track whether we are inside a pair
  let asteriskCount = 0; // Count of asterisks

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      // Toggle the inPair flag when encountering a vertical bar
      inPair = !inPair;
    } else if (s[i] === "*" && !inPair) {
      // If not in a pair and encounter an asterisk, increment asteriskCount
      asteriskCount++;
    }
  }

  return asteriskCount;
};
