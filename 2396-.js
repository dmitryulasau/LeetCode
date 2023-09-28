// https://leetcode.com/problems/strictly-palindromic-number/description/

var isStrictlyPalindromic = function (n) {
  if (n <= 2) return false;

  function isPalindromic(str) {
    return str === str.split("").reverse().join("");
  }

  for (let base = 2; base <= n - 2; base++) {
    const baseRepresentation = n.toString(base);
    if (!isPalindromic(baseRepresentation)) {
      return false;
    }
  }

  return true;
};
