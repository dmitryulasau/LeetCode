// https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "color") {
      if (items[i][1] === ruleValue) {
        count++;
      }
    } else if (ruleKey === "type") {
      if (items[i][0] === ruleValue) {
        count++;
      }
    } else if (ruleKey === "name") {
      if (items[i][2] === ruleValue) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
