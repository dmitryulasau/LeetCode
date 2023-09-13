// https://leetcode.com/problems/largest-local-values-in-a-matrix/

var largestLocal = function(grid) {
    const n = grid.length;
 const maxLocal = [];

 for (let i = 0; i < n - 2; i++) {
     maxLocal[i] = [];
     for (let j = 0; j < n - 2; j++) {
         let max = Number.MIN_SAFE_INTEGER;
         for (let x = 0; x < 3; x++) {
             for (let y = 0; y < 3; y++) {
                 max = Math.max(max, grid[i + x][j + y]);
             }
         }
         maxLocal[i][j] = max;
     }
 }

 return maxLocal; 
};