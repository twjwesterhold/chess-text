const pawnMoves = (rank, file, isWhite) => {
  const direction = isWhite ? -1 : 1;
  const validSquares = [];
  if (rank + direction >= 0 && rank + direction < 8) {
    validSquares.push({ rank: rank + direction, file: file });
  }
  return validSquares;
};

export default pawnMoves;
