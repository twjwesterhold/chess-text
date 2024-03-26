const queenMoves = (board, rank, file) => {
  const isWhite = board[rank][file].isWhite;
  const direction = isWhite ? -1 : 1;
  const validSquares = [];
  if (rank + direction >= 0 && rank + direction < 8) {
    validSquares.push([rank + direction, file]);
  }
  return validSquares;
};

export default queenMoves;
