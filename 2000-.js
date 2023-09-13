// https://leetcode.com/problems/reverse-prefix-of-word/

var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);
  if (index !== -1) {
    const reversedSegment = word
      .slice(0, index + 1)
      .split("")
      .reverse()
      .join("");
    return reversedSegment + word.slice(index + 1);
  }
  return word;
};
