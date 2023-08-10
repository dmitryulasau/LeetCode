// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  const result = [];

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxCandies);
  }

  return result;
};
