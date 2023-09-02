// https://leetcode.com/problems/sort-the-people/

var sortPeople = function (names, heights) {
  // Create an array of objects representing people with names and heights
  const people = names.map((name, index) => ({ name, height: heights[index] }));

  // Sort the people array by height in descending order
  people.sort((a, b) => b.height - a.height);

  // Extract the sorted names from the sorted people array
  const sortedNames = people.map((person) => person.name);

  return sortedNames;
};
