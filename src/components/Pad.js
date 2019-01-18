import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { createNeonAnimation } from './../utils';

// neon glow on active pad
const activeCSS = color => css`
  background: ${lighten(0.3, color)};
  animation: ${createNeonAnimation(color)} 0.5s linear;
  border: 3px solid white;
  border-radius: 30px;
  transform: scale(1.1);
`;

// pad component
const Pad = styled.div`
  margin: 5px;
  border-radius: 15px;
  box-sizing: border-box;
  background: ${({ color, active }) => color};
  cursor: pointer;
  transition: 0.2s;
  width: 200px;
  height: 200px;
  @media (max-width: 720px) {
    width: 100px;
    height: 100px;
    border-radius: 7px;
    margin: 2px;
  }

  ${({ active, color }) => (active ? activeCSS(color) : '')}

  &:hover {
    transform: ${({ active, playingSequence }) =>
      !active && !playingSequence ? 'scale(1.03)' : ''};
  }

  &.top-left {
    border-top-left-radius: 100%;
  }
  &.top-right {
    border-top-right-radius: 100%;
  }
  &.bottom-left {
    border-bottom-left-radius: 100%;
  }
  &.bottom-right {
    border-bottom-right-radius: 100%;
  }
`;

export default Pad;
