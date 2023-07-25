// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  let pointer = 0;
  let result = [];

  while (pointer < nums.length) {
    count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i === pointer) {
        continue;
      } else if (nums[i] < nums[pointer]) {
        count++;
      }
    }
    result.push(count);
    pointer++;
    count = 0;
  }

  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
