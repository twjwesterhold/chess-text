import { pawnLogic } from "./index";

const logicMap = new Map([
  ['p', (rank, file, isWhite) => pawnLogic(rank, file, isWhite)]
])

const pieceHandler = (piece, rank, file) => {
  const isWhite = piece === piece.toUpperCase();
  return logicMap.get(piece.toLowerCase())(rank, file, isWhite);
}

export default pieceHandler;
