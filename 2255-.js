// https://leetcode.com/problems/count-prefixes-of-a-given-string/

var countPrefixes = function (words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) {
      count++;
    }
  }
  return count;
};
