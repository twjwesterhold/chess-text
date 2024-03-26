import {
  bishopMoves,
  kingMoves,
  nightMoves,
  pawnMoves,
  queenMoves,
  rookMoves,
} from "./index";

const logicMap = new Map([
  ["p", pawnMoves],
  ["n", nightMoves],
  ["b", bishopMoves],
  ["r", rookMoves],
  ["q", queenMoves],
  ["k", kingMoves],
]);

const moveHandler = (board, rank, file) => {
  return logicMap.get(board[rank][file].piece.toLowerCase())(board, rank, file);
};

export default moveHandler;
