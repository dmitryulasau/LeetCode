// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += accounts[i][j];
    }

    maxWealth = Math.max(maxWealth, customerWealth);
  }

  return maxWealth;
};
