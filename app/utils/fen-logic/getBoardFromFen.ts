import { expandEmptySquares } from "./index";

const getBoardFromFen = (fen: string) => {
  const fenTemp = expandEmptySquares(fen.split(" ", 1)[0]);
  const rows = fenTemp.split("/");
  const board = [];

  // iterate over rows of fen
  rows.forEach((row, rank) => {
    const boardRow = [];

    // iterate over individual row adding each piece to boardRow
    row.split("").forEach((square, file) => {
      boardRow.push({
        piece: square !== "1" ? square : "",
        color: (rank + file) % 2 === 0 ? "white" : "black"
      });
    });

    // push row onto board
    board.push(boardRow);
  });

  return board;
};

export default getBoardFromFen;
