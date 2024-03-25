import Piece from "./piece";

const Square = ({ color, piece, onSquareClick }) => {
  return (
    <button className={`square ${color}`} onClick={onSquareClick}>
      <Piece piece={piece} />
    </button>
  );
};

export default Square;
