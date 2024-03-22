"use client";

const Square = ({ color }) => {
  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <button className={`square ${color}`} onClick={handleClick}>
      This is a button
    </button>
  );
};

const Board = () => {
  const board = [];
  for (let rank = 0; rank < 8; rank++) {
    const row = [];
    for (let file = 0; file < 8; file++) {
      row.push(
        <Square
          key={`${rank}${file}`}
          color={(rank + file) % 2 === 0 ? "black" : "white"}
        />,
      );
    }
    board.push(<div key={rank}>{row}</div>);
  }

  return <div>{board}</div>;
};

export default Board;
