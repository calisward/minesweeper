//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TODO: Map over input checking for *
// TODO: When * is found locate the index
// TODO: Find bombs
// TODO: Loop through index after a bomb is found the index before should reflect
// TODO: Find bombs and return *
// TODO: Add 1 to spaces next to bombs
// TODO: Anywhere theres a bomb, look horizonatal, vertically, and diagonally

export const annotate = (input) => {
  // TODO: Set up consts for input
  // TODO: Loop though each character in the input
  // TODO: if the character is * add 1 to the spaces next to it
  // TODO: return the updated array
  // TODO: If the input is empty return an empty array

  // Rows are going through each array that is in the input
  const rows = input.length;
   // Columns is the index of those strings found in the array
  const columns = input[0].length;
  const minesweeper = [];


  // Loops though each string in the array
  for (let spotInRow = 0; spotInRow < rows; spotInRow++) {
    // assume that nothing will be returned if the input is empty
    let row = '';

    // Loops though each character in the row and allows the surrounding characters to be recognized
    for (let spotInColumn = 0; spotInColumn < columns; spotInColumn++) {
      if (input[spotInRow][spotInColumn] === '*') {
        // returns the bombs
        row += '*';
        continue; // continues to look at the other characters
      }

      let surroundingMines = 0;

      // Set to -1 if the spot is out of bounds accounting for the boarders and the space before it
      for (let continuedRow = -1; continuedRow <= 1; continuedRow++) {
        for (let continuedColumn = -1; continuedColumn <= 1; continuedColumn++) {
          if (continuedRow === 0 && continuedColumn === 0) {
            continue;
          }
          // adding the resulys of both the mines found and the surrounding spaces
          const convertedRow = spotInRow + continuedRow;
          const convertedColumn = spotInColumn + continuedColumn;

          if (convertedRow >= 0 && convertedRow < rows && convertedColumn >= 0 && convertedColumn < columns && input[convertedRow][convertedColumn] === '*') {
            surroundingMines++;
          }
        }
      }
      row += surroundingMines > 0 ? surroundingMines : ' ';
    }
    minesweeper.push(row);
  } 
  return minesweeper;
};
  /**
  return input.map((row) => {
    const rowResults = row.split('');

    const newRow = rowResults.map((, i) => {
      let mines = ' ';
      let spaceBehind = i - 1;
      let spaceAhead = i + 1;

      if (rows === 0) {
        return [];
      }
      
      if (columns === '') {
        return [''];
      }

      if (columns === '*') {
        mines += '*';
      }

    return newRow;
    });
  });
  */