import { bishopMoves, rookMoves } from "./index";
import { SquareType } from "../../types";

const queenMoves = (board: SquareType[][], rank: number, file: number) => {
  return rookMoves(board, rank, file).concat(bishopMoves(board, rank, file));
};

export default queenMoves;
