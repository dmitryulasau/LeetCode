// https://leetcode.com/problems/design-an-ordered-stream/

var OrderedStream = function (n) {
  this.stream = new Array(n + 1); // Using 1-based index
  this.pointer = 1; // Next expected ID to be inserted
};

OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey] = value; // Insert the value into the stream

  const result = [];

  // Check if the inserted value completes the current chunk
  while (this.stream[this.pointer]) {
    result.push(this.stream[this.pointer]);
    this.pointer++;
  }

  return result;
};
