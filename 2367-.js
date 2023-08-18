// https://leetcode.com/problems/number-of-arithmetic-triplets/

var arithmeticTriplets = function (nums, diff) {
  const freqMap = new Map(); // Map to store the frequency of each number
  let count = 0;

  for (const num of nums) {
    count +=
      (freqMap.get(num - diff) || 0) * (freqMap.get(num - 2 * diff) || 0);
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  return count;
};
