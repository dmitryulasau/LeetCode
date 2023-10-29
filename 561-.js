// https://leetcode.com/problems/array-partition/

var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]; // Sum the minimum of each pair
  }

  return sum;
};
