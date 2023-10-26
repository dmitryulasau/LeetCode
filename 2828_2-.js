// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/

var isAcronym = function (words, s) {
  // Initialize an empty string for the acronym.
  var acronym = "";

  // Iterate through the words to build the acronym.
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      acronym += words[i][0]; // Append the first character of the word.
    }
  }

  // Check if the resulting acronym is equal to s.
  return acronym === s;
};
