import Piece from "./piece";
import styled from "styled-components";
import { Colors } from "../style/colors";

const Square = ({ color, piece, onSquareClick }) => {
  return (
    <StyledSquare onClick={onSquareClick} color={color} piece={piece}>
      <Piece piece={piece} />
    </StyledSquare>
  );
};

const StyledSquare = styled.button<{ color; piece }>`
  height: 10vw;
  width: 10vw;
  max-width: 100px;
  max-height: 100px;
  border: 0;
  padding: 0;
  background: ${(props) => props.color};
  &:hover {
    background: ${(props) =>
      props.piece ? Colors.LightSquareHover : Colors.DarkSquareHover};
  }
`;

export default Square;
