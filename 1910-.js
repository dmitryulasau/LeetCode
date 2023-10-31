// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

var removeOccurrences = function (s, part) {
  while (s.includes(part)) {
    const index = s.indexOf(part);
    s = s.slice(0, index) + s.slice(index + part.length);
  }
  return s;
};
