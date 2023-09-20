// https://leetcode.com/problems/smallest-even-multiple/

var smallestEvenMultiple = function (n) {
  let result = 0;

  let greatestCommonDivisor = n % 2 == 0 ? 2 : 1;
  let leastCommonMultiple = (n / greatestCommonDivisor) * 2;

  return leastCommonMultiple;
};
