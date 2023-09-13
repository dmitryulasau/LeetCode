// https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function (image) {
    const n = image.length;

    for (let row of image) {
        // Reverse the row using a loop or reverse() method
        let left = 0;
        let right = n - 1;
        while (left <= right) {
            const temp = row[left] ^ 1;
            row[left] = row[right] ^ 1;
            row[right] = temp;
            left++;
            right--;
        }
    }

    return image;
};
