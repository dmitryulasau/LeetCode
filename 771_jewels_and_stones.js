// https://leetcode.com/problems/jewels-and-stones/

const numJewelsInStones = function (jewels, stones) {
  const count = {};
  let jewelsCount = 0;
  for (let i = 0; i < stones.length; i++) {
    count[stones[i]] ? count[stones[i]]++ : (count[stones[i]] = 1);
  }

  for (let i = 0; i < jewels.length; i++) {
    if (jewels[i] in count) {
      jewelsCount += count[jewels[i]];
    }
  }

  return jewelsCount;
};

const jewels = "aA";
const stones = "aAAbbbb";

console.log(numJewelsInStones(jewels, stones));
