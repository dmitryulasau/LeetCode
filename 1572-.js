// https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function (mat) {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i === j) {
        // Primary diagonal
        sum += mat[i][j];
      } else if (i + j === mat.length - 1) {
        // Secondary diagonal (excluding elements on primary diagonal)
        sum += mat[i][j];
      }
    }
  }

  return sum;
};
