// https://leetcode.com/problems/first-letter-to-appear-twice/

var repeatedCharacter = function (s) {
  const indices = {}; // Object to store character indices

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (indices[char] !== undefined) {
      return char; // Found the first character that appears twice
    } else {
      indices[char] = i; // Store the index of the character
    }
  }

  return null; // No character appears twice
};
