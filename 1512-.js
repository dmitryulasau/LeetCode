// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function (nums) {
  const countMap = {};
  let goodPairs = 0;

  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (let count of Object.values(countMap)) {
    goodPairs += (count * (count - 1)) / 2;
  }

  return goodPairs;
};
