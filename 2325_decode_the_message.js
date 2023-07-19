// https://leetcode.com/problems/decode-the-message/

var decodeMessage = function (key, message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let chiper = key.split(" ").join("");
  let result = "";

  let uniqueKeys = [];

  for (let i = 0; i < chiper.length; i++) {
    if (!uniqueKeys.includes(chiper[i])) {
      uniqueKeys.push(chiper[i]);
    }
  }

  //   let set = new Set(chiper);
  //   console.log([...set]);

  let newAlphabet = {};

  for (let i = 0; i < alphabet.length; i++) {
    newAlphabet[chiper[i]] ? null : (newAlphabet[chiper[i]] = alphabet[i]);
  }

  console.log(newAlphabet);
  //   for (let i = 0; i < message.length; i++) {}

  return result;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
