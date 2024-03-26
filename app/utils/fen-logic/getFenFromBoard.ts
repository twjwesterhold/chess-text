import { squeezeEmptySquares } from "./index";

const getFenFromBoard = (
  board: { piece: string }[][],
) => {
  const fen = [];

  // iterate over rows of board
  board.forEach((row) => {
    const fenRow = [];

    // iterate over individual row adding each piece to fenRow
    row.forEach((square) => {
      fenRow.push(square.piece !== "" ? square.piece : "1");
    });

    // push row onto fen
    fen.push(fenRow.join(""));
  });

  // join fen array into single string and squeeze empty squares to make valid
  return squeezeEmptySquares(fen.join("/"));
};

export default getFenFromBoard;
