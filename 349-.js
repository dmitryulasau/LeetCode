// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function (nums1, nums2) {
  // Convert arrays to sets to remove duplicates
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  // Create an empty array to store the intersection
  let result = [];

  // Iterate through the elements in set1
  for (let num of set1) {
    // If the element exists in set2, add it to the result array
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
};
