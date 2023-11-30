// https://leetcode.com/problems/add-binary/submissions/

var addBinary = function (a, b) {
  let result = "";
  let carry = 0;

  // Start from the rightmost digits of both strings
  let i = a.length - 1;
  let j = b.length - 1;

  // Iterate until one of the strings is exhausted
  while (i >= 0 || j >= 0) {
    // Extract the current digits or assume 0 if one string is shorter
    let digitA = i >= 0 ? parseInt(a[i]) : 0;
    let digitB = j >= 0 ? parseInt(b[j]) : 0;

    // Sum the current digits along with the carry
    let sum = digitA + digitB + carry;

    // Determine the current digit and update the carry
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    // Move to the next digits towards the left
    i--;
    j--;
  }

  // If there is still a carry after processing all digits, add it to the result
  if (carry > 0) {
    result = carry + result;
  }

  return result;
};
