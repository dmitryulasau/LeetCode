// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

var countDigits = function (num) {
  let result = 0;

  const numArray = num.toString().split("");

  for (let i = 0; i < numArray.length; i++) {
    if (num % Number(numArray[i]) === 0) {
      result++;
    }
  }

  return result;
};

console.log(countDigits(121));
