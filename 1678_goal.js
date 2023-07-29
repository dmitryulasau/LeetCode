// https://leetcode.com/problems/goal-parser-interpretation/

var interpret = function (command) {
  return command
    .replace(/\(al\)/g, "al")
    .replace(/\(\)/g, "o")
    .replace(/G/g, "G");
};
