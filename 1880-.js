// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/

var isSumEqual = function (firstWord, secondWord, targetWord) {
  // Function to convert a string to its numerical value
  const getNumericalValue = (word) => {
    return parseInt(
      word
        .split("")
        .map((char) => char.charCodeAt(0) - 97)
        .join("")
    );
  };

  // Calculate numerical values for each word
  const numericalValueFirst = getNumericalValue(firstWord);
  const numericalValueSecond = getNumericalValue(secondWord);
  const numericalValueTarget = getNumericalValue(targetWord);

  // Check if the sum of the first two numerical values equals the target numerical value
  return numericalValueFirst + numericalValueSecond === numericalValueTarget;
};
