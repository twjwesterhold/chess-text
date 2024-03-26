import { expandEmptySquares } from "./index";

const isValidFen = (fen: string) => {
  // cut off move and castling data
  let fenTest = fen.split(" ", 1)[0];

  // expand empty squares
  fenTest = expandEmptySquares(fenTest);

  // separate into chunks
  const ranks = fenTest.split("/");

  // check that fen represents exactly 8 rows
  if (ranks.length !== 8) {
    return false;
  }

  // check each row is 8 characters long and contains only valid FEN characters. use find to break the second we find an invalid row
  const invalidRow = ranks.find((rank) => {
    return rank.length !== 8 || rank.search(/[^pnbrqk1]/i) !== -1;
  });

  // if we found an invalid row, will return false, otherwise true
  return invalidRow === undefined;
};

export default isValidFen;
