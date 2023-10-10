// https://leetcode.com/problems/partition-labels/

var partitionLabels = function (s) {
  const lastOccurrence = new Map();

  // Store the last occurrence index of each character
  for (let i = 0; i < s.length; i++) {
    lastOccurrence.set(s[i], i);
  }

  const partitions = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastOccurrence.get(s[i]));

    if (i === end) {
      partitions.push(end - start + 1);
      start = i + 1;
    }
  }

  return partitions;
};
