// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

function generateCellsInRange(s) {
    const [start, end] = s.split(':');
    const [col1, row1] = [start.slice(0, -1), parseInt(start.slice(-1))];
    const [col2, row2] = [end.slice(0, -1), parseInt(end.slice(-1))];
  
    const getColumnNumber = (col) => col.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    const getColumnName = (num) => String.fromCharCode('A'.charCodeAt(0) + num - 1);
  
    const result = [];
  
    for (let colNum = getColumnNumber(col1); colNum <= getColumnNumber(col2); colNum++) {
      for (let row = row1; row <= row2; row++) {
        const cellString = getColumnName(colNum) + row.toString();
        result.push(cellString);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const inputString = "K1:L2";
  const cellsInRange = generateCellsInRange(inputString);
  console.log(cellsInRange);
  