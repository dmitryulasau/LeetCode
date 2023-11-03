// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/

var removeTrailingZeros = function (num) {
  let i = num.length - 1;

  // Traverse from the end and remove trailing zeros
  while (i > 0 && num[i] === "0") {
    i--;
  }

  return num.slice(0, i + 1);
};
