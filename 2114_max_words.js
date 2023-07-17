// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

const mostWordsFound = function (sentences) {
  let result = 0;

  let temp = [];

  for (let i = 0; i < sentences.length; i++) {
    temp.push(sentences[i].split(" ").length);
  }

  return temp.reduce((acc, curr) => (acc > curr ? acc : curr));
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
