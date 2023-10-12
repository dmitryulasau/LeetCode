// https://leetcode.com/problems/sort-the-students-by-their-kth-score/

var sortTheStudents = function (score, k) {
  score.sort((a, b) => b[k] - a[k]);
  return score;
};
