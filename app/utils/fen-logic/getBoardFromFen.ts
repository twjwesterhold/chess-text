import { expandEmptySquares } from "./index";
import { PieceType, SquareType } from "../../types";

const getBoardFromFen = (fen: string): SquareType[][] => {
  const fenTemp = expandEmptySquares(fen.split(" ", 1)[0]);
  const rows = fenTemp.split("/");
  const board: SquareType[][] = [];

  // iterate over rows of fen
  rows.forEach((row, rank) => {
    const boardRow: SquareType[] = [];

    // iterate over individual row adding each piece to boardRow
    row.split("").forEach((square, file) => {
      boardRow.push({
        piece: square !== "1" ? (square as PieceType) : "",
        isWhite: (rank + file) % 2 === 0,
        isActive: false,
        isValid: false,
      });
    });

    // push row onto board
    board.push(boardRow);
  });

  return board;
};

export default getBoardFromFen;
