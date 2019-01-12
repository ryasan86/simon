import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 2px solid white;
  border-radius: 5px;
  height: 50px;
  min-width: 100px;
  padding: 0 20px 0 20px;
  color: white;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    &:disabled {
      pointer-events: none;
      background: transparent;
      color: white;
    }
  }
`;

export { Button };
