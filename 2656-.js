// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/

var maximizeSum = function (nums, k) {
    let max = Math.max(...nums);
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += max;
      max += 1;
    }
    return sum;
  };
