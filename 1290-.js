// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/

var getDecimalValue = function (head) {
  let result = 0;
  let current = head;

  while (current !== null) {
    result = result << 1; // Left shift the result to multiply by 2
    result += current.val;
    current = current.next;
  }

  return result;
};
