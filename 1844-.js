// https://leetcode.com/problems/replace-all-digits-with-characters/description/

var replaceDigits = function (s) {
  const shift = (c, x) => String.fromCharCode(c.charCodeAt(0) + x);
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      // If the index is even, it's a lowercase letter, so add it as is.
      result += s[i];
    } else {
      // If the index is odd, replace the digit with the shifted character.
      const shiftedChar = shift(s[i - 1], parseInt(s[i]));
      result += shiftedChar;
    }
  }

  return result;
};
