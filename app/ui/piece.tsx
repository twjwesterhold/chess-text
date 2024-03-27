import {
  BlackBishop,
  BlackKing,
  BlackKnight,
  BlackPawn,
  BlackQueen,
  BlackRook,
  WhiteBishop,
  WhiteKing,
  WhiteKnight,
  WhitePawn,
  WhiteQueen,
  WhiteRook,
} from "./pieces";
import { PieceType } from "../types";

const pieceMap = new Map([
  ["b", <BlackBishop key="b" />],
  ["k", <BlackKing key="k" />],
  ["n", <BlackKnight key="n" />],
  ["p", <BlackPawn key="p" />],
  ["q", <BlackQueen key="q" />],
  ["r", <BlackRook key="r" />],
  ["B", <WhiteBishop key="B" />],
  ["K", <WhiteKing key="K" />],
  ["N", <WhiteKnight key="N" />],
  ["P", <WhitePawn key="P" />],
  ["Q", <WhiteQueen key="Q" />],
  ["R", <WhiteRook key="R" />],
]);

const ChessPiece = ({ piece }: { piece: PieceType }) => {
  return pieceMap.get(piece);
};

export default ChessPiece;
