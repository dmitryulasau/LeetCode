// https://leetcode.com/problems/destination-city/

var destCity = function (paths) {
  const outgoingCities = new Set();

  // Create a set of all outgoing cities
  for (const path of paths) {
    outgoingCities.add(path[0]);
  }

  // Iterate through the paths and find the destination city
  for (const path of paths) {
    if (!outgoingCities.has(path[1])) {
      return path[1];
    }
  }
};
