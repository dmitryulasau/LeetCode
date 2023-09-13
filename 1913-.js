// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2]; // Maximum product of two largest elements
    const product2 = nums[0] * nums[1];         // Minimum product of two smallest elements
    return product1 - product2;      
};