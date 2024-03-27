const rookMoves = (board, rank, file) => {
  const isWhite = board[rank][file].piece === board[rank][file].piece.toUpperCase();
  const validSquares = [];
  const directions = [[1,0], [0,1], [-1,0], [0,-1]];
  directions.forEach((dir) => {
    let [targetRank, targetFile] = [rank + dir[0], file + dir[1]];
    while (targetRank >= 0 && targetRank <= 7 && targetFile >= 0 && targetFile <= 7) {
      const targetPiece = board[targetRank][targetFile].piece;
      if (targetPiece) {
        if (!(targetPiece === targetPiece.toUpperCase()) === isWhite) {
          validSquares.push({ rank: targetRank, file: targetFile });
        }
        break;
      }
      validSquares.push({ rank: targetRank, file: targetFile });
      targetRank += dir[0];
      targetFile += dir[1];
    }
  })
  return validSquares;
};

export default rookMoves;
