// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
  if (n === 1) {
    return 1; // Only one way to climb one step.
  }

  // Initialize an array to store the number of distinct ways for each step.
  const ways = new Array(n + 1);

  // Base cases: there's one way to climb one step and two ways to climb two steps.
  ways[1] = 1;
  ways[2] = 2;

  // Iterate from the 3rd step to the n-th step, calculating the number of ways.
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  // The final element in the array (ways[n]) holds the answer.
  return ways[n];
};
