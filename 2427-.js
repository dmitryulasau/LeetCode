// https://leetcode.com/problems/number-of-common-factors/

var commonFactors = function (a, b) {
  // Function to calculate the GCD of two numbers
  function gcd(x, y) {
    if (y === 0) return x;
    return gcd(y, x % y);
  }

  // Calculate the GCD of a and b
  const gcdValue = gcd(a, b);

  // Count the number of common factors
  let count = 0;
  for (let i = 1; i <= gcdValue; i++) {
    if (gcdValue % i === 0) {
      count++;
    }
  }

  return count;
};
