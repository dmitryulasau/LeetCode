// https://leetcode.com/problems/truncate-sentence/

var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};

console.log(truncateSentence("Hello how are you Contestant", 4));
