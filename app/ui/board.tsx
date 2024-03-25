"use client";

import Square from "./square";
import { useState } from "react";
import { getBoardFromFen, isValidFen } from "../utils";

const Board = () => {
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  const [board, setBoard] = useState(getBoardFromFen(fen));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidFen(fen)) {
      alert("Invalid fen!");
    } else {
      setBoard(getBoardFromFen(fen));
    }
  }

  return (
    <div>
      {!!board && board.map((row, rank) => {
        return (
          <div key={rank} className="board-row">
            {row.map((col, file) => {
              return (
                <Square
                  key={`${rank}${file}`}
                  color={(rank + file) % 2 === 0 ? "black" : "white"}
                  piece={col.piece}
                />
              );
            })}
          </div>
        );
      })}
      <form id="fen-submit" onSubmit={handleSubmit}>
        <input
          id="fen-submit-text"
          className="search"
          type="text"
          value={fen}
          onChange={(e) => setFen(e.target.value)}
        />
        <button id="fen-submit-button" className="button">Load</button>
      </form>
    </div>
  );
};

export default Board;
