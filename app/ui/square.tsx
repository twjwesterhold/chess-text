import Piece from "./piece";
import styled, { css } from "styled-components";
import { Colors } from "../style/colors";

const Square = ({
  piece,
  isWhite,
  isActive,
  isValid,
  onSquareClick,
  flipped,
}) => {
  return (
    <StyledSquare
      onClick={onSquareClick}
      $isWhite={isWhite}
      $isValid={isValid}
      $piece={piece}
    >
      <HighLight $isActive={isActive} $isValid={isValid}>
        <Flip $flipped={flipped}>
          <Piece piece={piece} />
        </Flip>
      </HighLight>
    </StyledSquare>
  );
};

const StyledSquare = styled.button<{ $isWhite; $isValid; $piece }>`
  height: 10vw;
  width: 10vw;
  max-width: 100px;
  max-height: 100px;
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

const HighLight = styled.div<{ $isActive; $isValid }>`
  height: 100%;
  width: 100%;
  background: ${(props) => (props.$isActive ? Colors.SquareSelect : "")};
  &:hover {
    background: ${(props) => (props.$isValid ? Colors.SquareSelect : "")};
  }
  z-index: 2;
`;

const Flip = styled.div<{ $flipped }>`
  transform: ${(props) => (props.$flipped ? "scaleY(-1)" : "")};
  z-index: 3;
`;

export default Square;
