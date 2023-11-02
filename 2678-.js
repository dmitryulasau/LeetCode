// https://leetcode.com/problems/number-of-senior-citizens/
var countSeniors = function (details) {
  let count = 0;

  for (let i = 0; i < details.length; i++) {
    // Extract age information from each string
    let ageStr = details[i].substr(11, 2); // Get the characters indicating age
    let age = parseInt(ageStr, 10); // Convert age string to a number

    if (age > 60) {
      count++; // Increment count if the age is over 60
    }
  }

  return count;
};
