export const expandEmptySquares = (fen: string) => {
  // replace multiple empty squares (characters 2-8) with an equivalent number of 1s
  return fen.replace(/[2345678]/g, (match) => "1".repeat(parseInt(match)));
};
