// https://leetcode.com/problems/left-and-right-sum-differences/

var leftRightDifference = function(nums) {
    const n = nums.length;
     const answer = new Array(n).fill(0);
     
     // Calculate prefix sum array and suffix sum array
     const prefixSum = new Array(n).fill(0);
     const suffixSum = new Array(n).fill(0);
     
     prefixSum[0] = nums[0];
     for (let i = 1; i < n; i++) {
         prefixSum[i] = prefixSum[i - 1] + nums[i];
     }
     
     suffixSum[n - 1] = nums[n - 1];
     for (let i = n - 2; i >= 0; i--) {
         suffixSum[i] = suffixSum[i + 1] + nums[i];
     }
     
     // Calculate answer using prefix and suffix sums
     for (let i = 0; i < n; i++) {
         const leftSum = i > 0 ? prefixSum[i - 1] : 0;
         const rightSum = i < n - 1 ? suffixSum[i + 1] : 0;
         answer[i] = Math.abs(leftSum - rightSum);
     }
     
     return answer; 
 };