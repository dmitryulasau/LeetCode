// https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function (image) {
  const n = image.length;

  for (let row of image) {
    // Reverse the row using reverse() method
    row.reverse();

    // Invert the row values using map() and ternary operator
    row = row.map((value) => (value === 1 ? 0 : 1));
  }

  return image;
};
