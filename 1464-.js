var maxProduct = function (nums) {
  let max1 = -Infinity; // Initialize the first maximum to negative infinity
  let max2 = -Infinity; // Initialize the second maximum to negative infinity

  for (const num of nums) {
    if (num > max1) {
      max2 = max1; // Update the second maximum
      max1 = num; // Update the first maximum
    } else if (num > max2) {
      max2 = num; // Update the second maximum
    }
  }

  return (max1 - 1) * (max2 - 1);
};
