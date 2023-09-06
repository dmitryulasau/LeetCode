// https://leetcode.com/problems/sum-of-unique-elements/

var sumOfUnique = function (nums) {
  // Create an object to store counts of each element
  const counts = {};

  // Iterate through the array and count the occurrences of each element
  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  let sum = 0;

  // Iterate through the object and sum up unique elements (count == 1)
  for (const num in counts) {
    if (counts[num] === 1) {
      sum += parseInt(num); // Convert the key (num) back to an integer and add to sum
    }
  }

  return sum;
};
