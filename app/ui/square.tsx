import ChessPiece from "./piece";
import styled from "styled-components";
import { Colors } from "../style/colors";
import { PieceType } from "../types";

interface SquareProps {
  piece: PieceType;
  isWhite: boolean;
  isActive: boolean;
  isValid: boolean;
  flipped: boolean;
  onSquareClick: () => void;
}

const Square = ({
  piece,
  isWhite,
  isActive,
  isValid,
  flipped,
  onSquareClick,
}: SquareProps) => {
  return (
    <StyledSquare
      onClick={onSquareClick}
      tabIndex={-1}
      $isWhite={isWhite}
      $isValid={isValid}
      $piece={piece}
    >
      <HighLight $isActive={isActive} $isValid={isValid}>
        <Flip $flipped={flipped}>
          <ChessPiece piece={piece} />
        </Flip>
      </HighLight>
    </StyledSquare>
  );
};

const StyledSquare = styled.button<{
  $isWhite: boolean;
  $isValid: boolean;
  $piece: PieceType;
}>`
  height: 10vw;
  width: 10vw;
  max-width: 100px;
  max-height: 100px;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${(props) =>
    props.$isWhite ? Colors.LightSquare : Colors.DarkSquare};
  overflow: hidden;
  background-image: ${(props) =>
    props.$isValid
      ? props.$piece
        ? `radial-gradient(rgba(0, 0, 0, 0) 80%, ${Colors.SquareSelect} 19%)`
        : `radial-gradient(${Colors.SquareSelect} 19%, rgba(0, 0, 0, 0) 20%)`
      : ""};
  &:hover {
    background-image: none;
  }
`;

const HighLight = styled.div<{ $isActive: boolean; $isValid: boolean }>`
  height: 100%;
  width: 100%;
  background: ${(props) => (props.$isActive ? Colors.SquareSelect : "")};
  &:hover {
    background: ${(props) => (props.$isValid ? Colors.SquareSelect : "")};
  }
  z-index: 2;
`;

const Flip = styled.div<{ $flipped: boolean }>`
  transform: ${(props) => (props.$flipped ? "scaleY(-1)" : "")};
  z-index: 3;
`;

export default Square;
