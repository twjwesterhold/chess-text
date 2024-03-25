export const squeezeEmptySquares = (fen: string) => {
  // replace strings of 1s with length of those strings of 1s
  return fen.replace(/1{2,8}/g, (match) => match.length.toString());
};
