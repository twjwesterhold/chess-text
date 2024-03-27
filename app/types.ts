export type PieceType =
  | ""
  | "p"
  | "n"
  | "b"
  | "r"
  | "q"
  | "k"
  | "P"
  | "N"
  | "B"
  | "R"
  | "Q"
  | "K";

export type SquareType = {
  piece: PieceType;
};

export type SquareCoords = {
  rank: number;
  file: number;
};
