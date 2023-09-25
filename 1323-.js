// https://leetcode.com/problems/maximum-69-number/

var maximum69Number = function (num) {
  // Convert the number to a string to manipulate its digits
  let numStr = num.toString();

  // Find the index of the first '6' digit (if it exists)
  const index = numStr.indexOf("6");

  // If there's a '6', replace it with '9', otherwise return the original number
  if (index !== -1) {
    numStr = numStr.substring(0, index) + "9" + numStr.substring(index + 1);
  }

  // Convert the string back to a number and return it
  return parseInt(numStr, 10);
};
