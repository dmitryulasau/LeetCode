// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function (words) {
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let alphaMorse = {};

  for (let i = 0; i < alphabet.length; i++) {
    alphaMorse[alphabet[i]] = morse[i];
  }

  console.log(alphaMorse);
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
