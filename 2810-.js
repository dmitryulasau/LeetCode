// https://leetcode.com/problems/faulty-keyboard/

var finalString = function (s) {
  // Convert the string to an array to make it easier to manipulate
  const typedText = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      // If the character is 'i', reverse the typed text
      typedText.reverse();
    } else {
      // If the character is not 'i', push it to the typed text
      typedText.push(s[i]);
    }
  }

  // Join the characters to get the final string
  return typedText.join("");
};
