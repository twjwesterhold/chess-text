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
  theme: Theme;
}

interface Theme {
  LightSquare: string,
  DarkSquare: string,
  SquareSelect: string,
  SquareHover: string,
}

const Square = ({
  piece,
  isWhite,
  isActive,
  isValid,
  flipped,
  onSquareClick,
  theme,
}: SquareProps) => {
  return (
    <StyledSquare
      onClick={onSquareClick}
      tabIndex={-1}
      $isWhite={isWhite}
      $isValid={isValid}
      $piece={piece}
      $theme={theme}
    >
      <HighLight $isActive={isActive} $isValid={isValid} $theme={theme}>
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
  $theme: Theme;
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
    props.$isWhite ? props.$theme.LightSquare : props.$theme.DarkSquare};
  overflow: hidden;
  background-image: ${(props) =>
    props.$isValid
      ? props.$piece
        ? `radial-gradient(rgba(0, 0, 0, 0) 80%, ${props.$theme.SquareSelect} 19%)`
        : `radial-gradient(${props.$theme.SquareSelect} 19%, rgba(0, 0, 0, 0) 20%)`
      : ""};
  &:hover {
    background-image: none;
  }
`;

const HighLight = styled.div<{ $isActive: boolean; $isValid: boolean; $theme: Theme }>`
  height: 100%;
  width: 100%;
  background: ${(props) => (props.$isActive ? props.$theme.SquareSelect : "")};
  &:hover {
    background: ${(props) => (props.$isValid ? props.$theme.SquareHover : "")};
  }
  z-index: 2;
`;

const Flip = styled.div<{ $flipped: boolean }>`
  transform: ${(props) => (props.$flipped ? "scaleY(-1)" : "")};
  z-index: 3;
`;

export default Square;
