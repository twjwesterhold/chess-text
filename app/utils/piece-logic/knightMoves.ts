// night to reflect function mapping because knights are represented by "n"s
// ... also Bob Seger (I'll probably change this though to be honest)
// ok I changed it, but I ain't happy about it
const knightMoves = (board, rank, file) => {
  const isWhite = board[rank][file].piece === board[rank][file].piece.toUpperCase();
  const validSquares = [];
  const knightShifts = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]]
  knightShifts.forEach((shift) => {
    if (rank + shift[0] >= 0 && rank + shift[0] <= 7 && file + shift[1] >= 0 && file + shift[1] <= 7)  {
      const targetPiece = board[rank + shift[0]][file + shift[1]].piece;
      if (!(targetPiece && ((targetPiece === targetPiece.toUpperCase()) === isWhite))) {
        validSquares.push({ rank: rank + shift[0], file: file + shift[1]})
      }
    }
  });
  return validSquares;
};

export default knightMoves;
