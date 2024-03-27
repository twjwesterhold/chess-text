import { bishopMoves, rookMoves } from "./index";

const queenMoves = (board, rank, file) => {
  return rookMoves(board, rank, file).concat(bishopMoves(board, rank, file));
};

export default queenMoves;
