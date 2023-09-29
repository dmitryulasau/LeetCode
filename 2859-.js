// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/

var sumIndicesWithKSetBits = function (nums, k) {
  // Helper function to count set bits in a number's binary representation
  function countSetBits(num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // Calculate the number of set bits in the binary representation of 'i'
    const setBitsCount = countSetBits(i);

    // Check if the number of set bits equals 'k'
    if (setBitsCount === k) {
      result += nums[i];
    }
  }

  return result;
};
