// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

var countKDifference = function (nums, k) {
  const numFrequency = new Map();
  let count = 0;

  for (const num of nums) {
    // Check if there exists a number x such that |num - x| == k
    if (numFrequency.has(num - k)) {
      count += numFrequency.get(num - k);
    }
    if (numFrequency.has(num + k)) {
      count += numFrequency.get(num + k);
    }

    // Update the frequency of the current number
    numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
  }

  return count;
};
