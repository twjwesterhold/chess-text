// night to reflect function mapping because knights are represented by "n"s
// ... also Bob Seger (I'll probably change this though to be honest)
const nightMoves = (rank, file, isWhite) => {
  const direction = isWhite ? -1 : 1;
  const validSquares = [];
  if (rank + direction >= 0 && rank + direction < 8) {
    validSquares.push([rank + direction, file]);
  }
  return validSquares;
};

export default nightMoves;
