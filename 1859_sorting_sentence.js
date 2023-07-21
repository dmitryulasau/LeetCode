// https://leetcode.com/problems/sorting-the-sentence/

var sortSentence = function (s) {
  let temp = [];

  let sArray = s.split(" ");

  let sentence = {};

  for (let i = 0; i < sArray.length; i++) {
    sentence[sArray[i].slice(-1)] = sArray[i].slice(0, sArray[i].length - 1);
  }

  for (w in sentence) {
    temp[Number(w) - 1] = sentence[w];
  }

  return temp.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("z1 z2 z3"));
