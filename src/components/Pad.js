import styled, { keyframes, css } from 'styled-components';
import { lighten } from 'polished';

// neon glow animation
const neonGlow = color => keyframes`
    from {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${color},
        0 0 35px ${color}, 0 0 40px ${color}, 0 0 50px ${color}, 0 0 75px ${color};
      }
      to {
        box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px ${color},
          0 0 70px ${color}, 0 0 80px ${color}, 0 0 100px ${color}, 0 0 150px ${color};
    }
`;


const activeCSS = color => css`
  background: ${lighten(0.3, color)};
  animation: ${neonGlow(color)} 0.5s;
  transform: scale(1.3);
`;

// pad component
const Pad = styled.div`
  margin: 5px;
  width: 200px;
  height: 200px;
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
