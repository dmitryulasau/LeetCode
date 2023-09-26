// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

var minimumSum = function (num) {
    let str = num.toString().split("").sort();
    return parseInt(str[0] + str[2]) + parseInt(str[1] + str[3]);
  };
