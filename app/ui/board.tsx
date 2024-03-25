"use client";

import { useState } from "react";
import WhitePawn from "./pieces/whitePawn";

const Square = ({ color, piece }) => {
  const [thisPiece, setThisPiece] = useState(piece);

  const handleClick = () => {
    setThisPiece(WhitePawn);
  };

  return (
    <button className={`square ${color}`} onClick={handleClick}>
      {thisPiece}
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
          piece={null}
        />,
      );
    }
    board.push(
      <div key={rank} className="board-row">
        {row}
      </div>,
    );
  }

  return (
    <div>
      {board}
      <input className="search" type="text" />
    </div>
  );
};

export default Board;
