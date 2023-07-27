// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function (nums) {
  let result = [];
  let number = 0;
  for (let i = 0; i < nums.length; i++) {
    number += nums[i];
    result.push(number);
  }

  return result;
};

console.log(runningSum([1, 2, 3, 4]));
