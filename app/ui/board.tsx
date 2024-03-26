"use client";

import Square from "./square";
import { useState } from "react";
import { getBoardFromFen, getFenFromBoard, isValidFen } from "../utils";
import { inter } from "../style/fonts";
import { Colors } from "../style/colors";
import { pieceHandler } from "../utils/piece-logic";

const Board = () => {
  const [fen, setFen] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  );
  const [board, setBoard] = useState(getBoardFromFen(fen));
  const [activeSquare, setActiveSquare] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [validSquares, setValidSquares] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidFen(fen)) {
      alert("Invalid fen!");
    } else {
      setBoard(getBoardFromFen(fen));
    }
  };

  const handleSquareClick = (rank: number, file: number) => {
    const newBoard = board.map((row) => {
      return row.slice();
    });
    if (activeSquare) {
      newBoard[activeSquare.rank][activeSquare.file] = {
        piece: "",
        color:
          (activeSquare.rank + activeSquare.file) % 2 === 0
            ? Colors.LightSquare
            : Colors.DarkSquare,
      };
      validSquares.forEach((el) => {
        newBoard[el[0]][el[1]].color =
          (el[0] + el[1]) % 2 === 0
            ? Colors.LightSquare
            : Colors.DarkSquare;
      })
      newBoard[rank][file].piece =
        board[activeSquare.rank][activeSquare.file].piece;
      setBoard(newBoard);
      setFen(getFenFromBoard(newBoard));
      setActiveSquare(null);
    } else if (board[rank][file].piece) {
      const newValidSquares = pieceHandler(board[rank][file].piece, rank, file);
      newValidSquares.forEach((el) => {
        console.log(el);
        newBoard[el[0]][el[1]].color =
          (el[0] + el[1]) % 2 === 0
            ? Colors.LightSquareSelect
            : Colors.DarkSquareSelect;
      })
      newBoard[rank][file].color =
        (rank + file) % 2 === 0
          ? Colors.LightSquareSelect
          : Colors.DarkSquareSelect;
      setValidSquares(newValidSquares);
      setBoard(newBoard);
      setActiveSquare({ rank, file });
    }
  };

  return (
    <div className={`${inter.className} board-container`}>
      <div className="fen">
        <h1>Board Editor</h1>
        <button className="submit-button" onClick={() => setFlipped(!flipped)}>Flip Board</button>
      </div>
      <div className={`board ${flipped ? "flipped" : ""}`}>
        {!!board &&
          board.map((row, rank) => {
            return (
              <div key={rank} className="board-row">
                {row.map((col, file) => {
                  return (
                    <Square
                      key={`${7-rank}${file}`}
                      color={col.color}
                      piece={col.piece}
                      flipped={flipped}
                      onSquareClick={() => {
                        handleSquareClick(rank, file);
                      }}
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
        <button id="fen-submit-button" className="submit-button">
          Load
        </button>
        <button
          id="fen-empty-button"
          className="submit-button"
          onClick={() =>
            setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
          }
        >
          Empty
        </button>
      </form>
    </div>
  );
};

export default Board;
