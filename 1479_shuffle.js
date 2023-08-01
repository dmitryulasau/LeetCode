// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < nums.length / 2; i++) {
    let x = i;
    let y = i + nums.length / 2;
    result.push(nums[x]);
    result.push(nums[y]);
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
