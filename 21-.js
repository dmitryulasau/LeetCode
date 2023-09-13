// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1); // Create a dummy node
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If one of the lists still has remaining elements, append them to the result
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next; // Return the merged list starting from the next of the dummy node
};
