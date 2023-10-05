// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/description/\

var minPartitions = function (n) {
  let maxDigit = 0;
  for (let i = 0; i < n.length; i++) {
    const digit = parseInt(n[i]);
    maxDigit = Math.max(maxDigit, digit);
  }
  return maxDigit;
};
