// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  const digits = Array.from(String(n), Number); // Convert the integer to an array of its digits

  for (const digit of digits) {
    product *= digit;
    sum += digit;
  }

  return product - sum;
};
