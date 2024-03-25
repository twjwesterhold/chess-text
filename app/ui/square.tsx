import Piece from "./piece";

const Square = ({ color, piece }) => {
  return (
    <button className={`square ${color}`}>
      <Piece piece={piece} />
    </button>
  );
};

export default Square;
