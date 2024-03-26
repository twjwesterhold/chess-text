"use client";

import Square from "./square";
import { useState } from "react";
import { getBoardFromFen, getFenFromBoard, isValidFen } from "../utils";
import { inter } from "../style/fonts";
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
        ...board[activeSquare.rank][activeSquare.file],
        piece: "",
        isActive: false,
      };
      validSquares.forEach((el) => {
        newBoard[el[0]][el[1]] = {
          ...board[el[0]][el[1]],
          isValid: false,
        };
      });
      newBoard[rank][file].piece =
        board[activeSquare.rank][activeSquare.file].piece;
      setBoard(newBoard);
      setFen(getFenFromBoard(newBoard));
      setActiveSquare(null);
      setValidSquares([]);
    } else if (board[rank][file].piece) {
      const newValidSquares = pieceHandler(board[rank][file].piece, rank, file);
      console.log(newValidSquares);
      newValidSquares.forEach((el) => {
        newBoard[el[0]][el[1]] = {
          ...board[el[0]][el[1]],
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
                      isWhite={square.isWhite}
                      piece={square.piece}
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
