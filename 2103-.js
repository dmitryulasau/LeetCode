// https://leetcode.com/problems/rings-and-rods/

var countPoints = function(rings) {
    const rods = new Array(10).fill(0); // Initialize an array to store the count of colors on each rod
    const n = rings.length / 2;

    for (let i = 0; i < n; i++) {
        const color = rings[2 * i];
        const rod = parseInt(rings[2 * i + 1]);

        if (!rods[rod]) {
            rods[rod] = { R: 0, G: 0, B: 0 }; // Initialize the color count for this rod
        }

        rods[rod][color]++;
    }

    let count = 0;
    for (const rodColors of rods) {
        if (rodColors && rodColors.R > 0 && rodColors.G > 0 && rodColors.B > 0) {
            count++;
        }
    }

    return count;
};