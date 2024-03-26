"use client";

import Square from "./square";
import { useState } from "react";
import { getBoardFromFen, getFenFromBoard, isValidFen } from "../utils";
import { inter } from "../style/fonts";

const Board = () => {
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  const [board, setBoard] = useState(getBoardFromFen(fen));
  const [activeSquare, setActiveSquare] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidFen(fen)) {
      alert("Invalid fen!");
    } else {
      setBoard(getBoardFromFen(fen));
    }
  }

  const handleSquareClick = (rank: number, file: number) => {
    const newBoard = board.slice();
    if (activeSquare) {
      newBoard[rank][file].piece = board[activeSquare.rank][activeSquare.file].piece;
      newBoard[activeSquare.rank][activeSquare.file] = { piece: "", color: ((activeSquare.rank + activeSquare.file) % 2 === 0) ? "white" : "black" };
      setBoard(newBoard);
      setFen(getFenFromBoard(board));
      setActiveSquare(null);
    } else if (board[rank][file].piece) {
      newBoard[rank][file].color = ((rank + file) % 2 === 0) ? "white-highlight" : "black-highlight";
      setBoard(newBoard);
      setActiveSquare({ rank, file });
    }
  }

  return (
    <div className={`${inter.className} board-container`}>
      <h1>Chess!</h1>
      <div className="board">
        {!!board && board.map((row, rank) => {
          return (
            <div key={rank} className="board-row">
              {row.map((col, file) => {
                return (
                  <Square
                    key={`${rank}${file}`}
                    color={col.color}
                    piece={col.piece}
                    onSquareClick={() => { handleSquareClick(rank, file) }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <form className="fen" id="fen-submit" onSubmit={handleSubmit}>
        <input
          id="fen-submit-text"
          className="search"
          type="text"
          value={fen}
          onChange={(e) => setFen(e.target.value)}
        />
        <button id="fen-submit-button" className="submit-button">Load</button>
        <button id="fen-empty-button" className="submit-button" onClick={() => setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")}>Empty</button>
      </form>
    </div>
  );
};

export default Board;
