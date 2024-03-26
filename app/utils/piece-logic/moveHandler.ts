import {
  bishopMoves,
  kingMoves,
  nightMoves,
  pawnMoves,
  queenMoves,
  rookMoves,
} from "./index";

const logicMap = new Map([
  ["p", (rank, file, isWhite) => pawnMoves(rank, file, isWhite)],
  ["n", (rank, file, isWhite) => nightMoves(rank, file, isWhite)],
  ["b", (rank, file, isWhite) => bishopMoves(rank, file, isWhite)],
  ["r", (rank, file, isWhite) => rookMoves(rank, file, isWhite)],
  ["q", (rank, file, isWhite) => queenMoves(rank, file, isWhite)],
  ["k", (rank, file, isWhite) => kingMoves(rank, file, isWhite)],
]);

const moveHandler = (piece, rank, file) => {
  const isWhite = piece === piece.toUpperCase();
  return logicMap.get(piece.toLowerCase())(rank, file, isWhite);
};

export default moveHandler;
