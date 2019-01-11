import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { createNeonAnimation } from './../utils';

// neon glow on active pad
const activeCSS = color => css`
  background: ${lighten(0.3, color)};
  animation: ${createNeonAnimation(color)} 0.5s linear;
  border: 3px solid white;
  border-radius: 30px;
  transform: scale(1.3);
`;

// pad component
const Pad = styled.div`
  margin: 5px;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  box-sizing: border-box;
  background: ${({ color, active }) => color};
  cursor: pointer;
  transition: 0.2s;
  ${({ active, color }) => (active ? activeCSS(color) : '')}

  &:hover {
    transform: ${({ active }) => (!active ? 'scale(1.03)' : '')};
  }
`;

export default Pad;
