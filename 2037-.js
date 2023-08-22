// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b); // Sort seats in ascending order
  students.sort((a, b) => a - b); // Sort students in ascending order

  let totalMoves = 0;
  const n = seats.length;

  for (let i = 0; i < n; i++) {
    totalMoves += Math.abs(seats[i] - students[i]); // Calculate moves for each student
  }

  return totalMoves;
};
