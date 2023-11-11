// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function (nums1, nums2) {
  const map = new Map();
  const result = [];

  // Populate the hash map with the frequency of each number in nums1
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Iterate through nums2 and check for common elements
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
};
