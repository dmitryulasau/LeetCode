// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function (n) {
  let count = n;

  function counter() {
    const currentValue = count;
    count++;

    return currentValue;
  }

  return counter;
};
