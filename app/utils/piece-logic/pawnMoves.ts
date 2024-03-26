const pawnMoves = (rank, file, isWhite) => {
  const direction = isWhite ? -1 : 1;
  const validSquares = [];
  if (Math.abs(rank + direction) < 8) {
    validSquares.push([rank + direction, file]);
  }
  return validSquares;
};

export default pawnMoves;
