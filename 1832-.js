// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function (sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterSet = new Set();

  for (const char of sentence) {
    if (alphabet.includes(char)) {
      letterSet.add(char);
    }
  }

  return letterSet.size === 26;
};
