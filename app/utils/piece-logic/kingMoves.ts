import { SquareCoords, SquareType } from "../../types";

const kingMoves = (board: SquareType[][], rank: number, file: number) => {
  const isWhite =
    board[rank][file].piece === board[rank][file].piece.toUpperCase();
  const validSquares: SquareCoords[] = [];
  const kingShifts = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];
  kingShifts.forEach((shift) => {
    if (
      rank + shift[0] >= 0 &&
      rank + shift[0] <= 7 &&
      file + shift[1] >= 0 &&
      file + shift[1] <= 7
    ) {
      const targetPiece = board[rank + shift[0]][file + shift[1]].piece;
      if (
        !(
          targetPiece && (targetPiece === targetPiece.toUpperCase()) === isWhite
        )
      ) {
        validSquares.push({ rank: rank + shift[0], file: file + shift[1] });
      }
    }
  });
  return validSquares;
};

export default kingMoves;
