// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function (allowed, words) {
  let consistentCount = 0;

  for (const word of words) {
    let isConsistent = true;
    for (const char of word) {
      if (!allowed.includes(char)) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      consistentCount++;
    }
  }

  return consistentCount;
};
