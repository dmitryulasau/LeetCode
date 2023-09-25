// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

var minimumSum = function (num) {
  // Convert the integer to an array of its digits
  const digits = num.toString().split("").map(Number);

  // Sort the digits in non-decreasing order
  digits.sort((a, b) => a - b);

  // Construct new1 by combining the digits from left to right
  const new1 = parseInt(digits.join(""));

  // Construct new2 by combining the digits from right to left
  const new2 = parseInt(digits.reverse().join(""));

  // Calculate and return the minimum possible sum
  return new1 + new2;
};
