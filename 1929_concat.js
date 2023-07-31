// https://leetcode.com/problems/concatenation-of-array/

var getConcatenation = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i];
    result[i + nums.length] = nums[i];
  }

  return result;
};

console.log(getConcatenation([1, 2, 1]));
