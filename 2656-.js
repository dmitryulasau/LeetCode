// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/

var maximizeSum = function (nums, k) {
  nums.sort((a, b) => b - a); // Sort in descending order
  let score = 0;

  for (let i = 0; i < nums.length; i++) {
    const m = nums[i];
    const diff = i < nums.length - 1 ? m - nums[i + 1] : 0;
    const occurrences = i + 1;

    if (diff * occurrences <= k) {
      score += diff * occurrences;
      k -= diff * occurrences;
    } else {
      const increment = Math.floor(k / occurrences);
      score += increment * m;
      break;
    }
  }

  if (k > 0) {
    score += Math.floor(k / nums.length);
  }

  return score;
};
