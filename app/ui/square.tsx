import Piece from "./piece";
import styled from "styled-components";
import { Colors } from "../style/colors";

const Square = ({ color, piece, onSquareClick, flipped }) => {
  return (
    <StyledSquare onClick={onSquareClick} color={color} $piece={piece} $flipped={flipped}>
      <Flip $flipped={flipped}>
        <Piece piece={piece} />
      </Flip>
    </StyledSquare>
  );
};

const StyledSquare = styled.button<{ color, $piece, $flipped}>`
  height: 10vw;
  width: 10vw;
  max-width: 100px;
  max-height: 100px;
  border: none;
  padding: 0;
    background: ${props => props.color};
  &:hover {
    background: ${(props) =>
      props.$piece ? Colors.LightSquareHover : Colors.DarkSquareHover};
  }
`;

const Flip = styled.div<{ $flipped }>`
    transform: ${props => props.$flipped ? "scaleY(-1)" : ""};
`

export default Square;
