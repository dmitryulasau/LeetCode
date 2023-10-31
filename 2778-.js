// https://leetcode.com/problems/sum-of-squares-of-special-elements/

var sumOfSquares = function (nums) {
  let n = nums.length;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += nums[i - 1] * nums[i - 1];
    }
  }

  return sum;
};
