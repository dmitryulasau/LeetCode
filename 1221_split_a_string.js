// https://leetcode.com/problems/split-a-string-in-balanced-strings/

const balancedStringSplit = function (s) {
  let count = 0;

  const stack = [];

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (top !== undefined && top !== s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (stack.length === 0) {
      count++;
    }
  }
  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
