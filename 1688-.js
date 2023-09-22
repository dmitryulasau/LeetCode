// https://leetcode.com/problems/count-of-matches-in-tournament/

var numberOfMatches = function (n) {
  if (n === 1) {
    // If there's only one team left, they are the winner.
    return 0;
  } else if (n % 2 === 0) {
    // If the number of teams is even, half of them advance, and the rest are eliminated.
    return n / 2 + numberOfMatches(n / 2);
  } else {
    // If the number of teams is odd, one team advances, and the rest are paired.
    return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
  }
};
