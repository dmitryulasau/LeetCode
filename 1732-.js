// https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function (gain) {
  let highest = 0; // Initialize the highest altitude
  let currentAltitude = 0; // Initialize the current altitude

  for (let netGain of gain) {
    currentAltitude += netGain; // Update the current altitude
    highest = Math.max(highest, currentAltitude); // Update the highest altitude
  }

  return highest;
};
