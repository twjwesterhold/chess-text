"use client";

import Square from "./square";
import React, { useState } from "react";
import {
  getBoardFromFen,
  getFenFromBoard,
  isValidFen,
  moveHandler,
} from "../utils";
import { inter } from "../style/fonts";
import { SquareCoords } from "../types";

const Board = () => {
  const [fen, setFen] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  );
  const [board, setBoard] = useState(getBoardFromFen(fen));
  const [activeSquare, setActiveSquare] = useState<SquareCoords | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [validSquares, setValidSquares] = useState<SquareCoords[]>([]);
  const [whiteToMove, setWhiteToMove] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
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
      if (validSquares.find((el) => el.rank === rank && el.file === file)) {
        newBoard[activeSquare.rank][activeSquare.file] = {
          ...board[activeSquare.rank][activeSquare.file],
          piece: "",
          isActive: false,
        };
        validSquares.forEach((el) => {
          newBoard[el.rank][el.file] = {
            ...board[el.rank][el.file],
            isValid: false,
          };
        });
        newBoard[rank][file].piece =
          board[activeSquare.rank][activeSquare.file].piece;
        setBoard(newBoard);
        setFen(getFenFromBoard(newBoard, !whiteToMove));
        setWhiteToMove(!whiteToMove);
        setActiveSquare(null);
        setValidSquares([]);
      } else {
        newBoard[activeSquare.rank][activeSquare.file] = {
          ...board[activeSquare.rank][activeSquare.file],
          isActive: false,
        };
        validSquares.forEach((el) => {
          newBoard[el.rank][el.file] = {
            ...board[el.rank][el.file],
            isValid: false,
          };
        });
        setBoard(newBoard);
        setActiveSquare(null);
        setValidSquares([]);
      }
    } else if (
      board[rank][file].piece &&
      (board[rank][file].piece === board[rank][file].piece.toUpperCase()) ===
        whiteToMove
    ) {
      const newValidSquares = moveHandler(board, rank, file);
      newValidSquares.forEach((el) => {
        newBoard[el.rank][el.file] = {
          ...board[el.rank][el.file],
          isValid: true,
        };
      });
      newBoard[rank][file].isActive = true;
      setValidSquares(newValidSquares);
      setBoard(newBoard);
      setActiveSquare({ rank, file });
    }
  };

  return (
    <div className={`${inter.className} board-container`}>
      <div className="fen">
        <h1>Board Editor</h1>
        <button className="submit-button" onClick={() => setFlipped(!flipped)}>
          Flip Board
        </button>
      </div>
      <div className={`board ${flipped ? "flipped" : ""}`}>
        {!!board &&
          board.map((row, rank) => {
            return (
              <div key={rank} className="board-row">
                {row.map((square, file) => {
                  return (
                    <Square
                      key={`${rank}${file}`}
                      piece={square.piece}
                      isWhite={square.isWhite}
                      isActive={square.isActive}
                      isValid={square.isValid}
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
