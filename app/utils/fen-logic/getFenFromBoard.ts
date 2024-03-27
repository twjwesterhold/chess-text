import { squeezeEmptySquares } from "./index";
import { SquareType } from "../../types";

const getFenFromBoard = (board: SquareType[][], whiteToMove: boolean) => {
  const fen: string[] = [];

  // iterate over rows of board
  board.forEach((row) => {
    const fenRow: string[] = [];

    // iterate over individual row adding each piece to fenRow
    row.forEach((square) => {
      fenRow.push(square.piece !== "" ? square.piece : "1");
    });

    // push row onto fen
    fen.push(fenRow.join(""));
  });

  // join fen array into single string and squeeze empty squares to make valid
  return [squeezeEmptySquares(fen.join("/")), whiteToMove ? "w" : "b"].join(
    " ",
  );
};

export default getFenFromBoard;
