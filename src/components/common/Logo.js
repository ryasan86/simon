import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(-30deg) }
  50% { transform: rotate(30deg) }
  75% { transform: rotate(-30deg) }
  100% { transform: rotate(0deg) }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:hover {
    animation: ${wobble} 1s;
  }
`;

export { Logo };
