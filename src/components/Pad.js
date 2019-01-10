import styled from 'styled-components';
import { lighten } from 'polished';

const Pad = styled.div`
  margin: 5px;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background: ${({ color, active }) => (active ? lighten(0.3, color) : color)};
  cursor: pointer;
  animation: none;
  transition: 0.2s;
  transform: ${({ active }) => (active ? 'scale(1.3)' : '')};
  &:hover {
    transform: ${({ active }) => (!active ? 'scale(1.03)' : '')};
  }

  @-webkit-keyframes neon {
    from {
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
        0 0 40px ${({ color }) => color}, 0 0 70px ${({ color }) => color},
        0 0 80px ${({ color }) => color}, 0 0 100px ${({ color }) => color},
        0 0 150px ${({ color }) => color};
    }
    to {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
        0 0 20px ${({ color }) => color}, 0 0 35px ${({ color }) => color},
        0 0 40px ${({ color }) => color}, 0 0 50px ${({ color }) => color},
        0 0 75px ${({ color }) => color};
    }
  }
`;

export default Pad;
