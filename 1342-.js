// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function (num) {
  let steps = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      // If the number is even, divide it by 2
      num /= 2;
    } else {
      // If the number is odd, subtract 1 from it
      num -= 1;
    }
    steps++;
  }

  return steps;
};
