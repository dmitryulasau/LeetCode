// https://leetcode.com/problems/di-string-match/

var diStringMatch = function (s) {
  let n = s.length;
  let result = [];
  let low = 0,
    high = n;

  for (let i = 0; i <= n; i++) {
    if (s[i] === "I") {
      result.push(low);
      low++;
    } else {
      result.push(high);
      high--;
    }
  }

  return result;
};
