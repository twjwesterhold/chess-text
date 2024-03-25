import { expandEmptySquares } from "./expandEmptySquares";

export const getBoardFromFen = (fen: string) => {
  const fenTemp = expandEmptySquares(fen.split(" ", 1)[0]);
  const rows = fenTemp.split("/");
  const board = [];

  // iterate over rows of fen
  rows.forEach((row, rank) => {
    const boardRow = [];

    // iterate over individual row adding each piece to boardRow
    row.split("").forEach((square, file) => {
      boardRow.push({
        rank,
        file,
        piece: square !== "1" ? square : "",
      });
    });

    // push row onto board
    board.push(boardRow);
  });

  return board;
};
