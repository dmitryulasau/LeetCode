// https://leetcode.com/problems/sum-of-digits-in-base-k/

var sumBase = function (n, k) {
  // Convert the number 'n' from base 10 to base 'k'
  let converted = n.toString(k); // Convert 'n' to base 'k'

  // Calculate the sum of digits after converting to base 'k'
  let sum = 0;
  for (let digit of converted) {
    sum += parseInt(digit, k); // Interpret each digit as base 10 and sum them up
  }

  return sum;
};
