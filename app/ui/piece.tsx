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

const pieceMap = {
  b: <BlackBishop />,
  k: <BlackKing />,
  n: <BlackKnight />,
  p: <BlackPawn />,
  q: <BlackQueen />,
  r: <BlackRook />,
  B: <WhiteBishop />,
  K: <WhiteKing />,
  N: <WhiteKnight />,
  P: <WhitePawn />,
  Q: <WhiteQueen />,
  R: <WhiteRook />,
};

const Piece = ({ piece }) => {
  return <>{pieceMap[piece]}</>;
};

export default Piece;
