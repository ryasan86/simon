import styled from 'styled-components';
import { lighten } from 'polished';

const Pad = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: ${({ color, active }) => (active ? lighten(0.3, color) : color)};
  cursor: pointer;
  animation: none;
  transition: 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

export default Pad;
