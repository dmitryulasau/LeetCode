// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

var differenceOfSum = function (nums) {
  // Calculate the element sum
  const elementSum = nums.reduce((sum, num) => sum + num, 0);

  // Calculate the digit sum
  const digitSum = nums.reduce((sum, num) => {
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }, 0);

  // Calculate and return the absolute difference
  return Math.abs(elementSum - digitSum);
};
