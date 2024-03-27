const pawnMoves = (board, rank, file) => {
  const isWhite =
    board[rank][file].piece === board[rank][file].piece.toUpperCase();
  const direction = isWhite ? -1 : 1;
  const validSquares = [];
  const forward1 = rank + direction;
  if (forward1 >= 0 && forward1 <= 7) {
    if (!board[forward1][file].piece) {
      validSquares.push({ rank: forward1, file: file });
      if (
        ((rank === 1 && !isWhite) || (rank === 6 && isWhite)) &&
        !board[forward1 + direction][file].piece
      ) {
        validSquares.push({ rank: forward1 + direction, file: file });
      }
    }
    if (
      file !== 0 &&
      board[forward1][file - 1].piece &&
      (board[forward1][file - 1].piece ===
        board[forward1][file - 1].piece.toUpperCase()) !==
        isWhite
    ) {
      validSquares.push({ rank: forward1, file: file - 1 });
    }
    if (
      file !== 7 &&
      board[forward1][file + 1].piece &&
      (board[forward1][file + 1].piece ===
        board[forward1][file + 1].piece.toUpperCase()) !==
        isWhite
    ) {
      validSquares.push({ rank: forward1, file: file + 1 });
    }
  }
  return validSquares;
};

export default pawnMoves;
