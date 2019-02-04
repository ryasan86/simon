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
  transition: background 0.5s, color 0.5s;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    &:disabled {
      background: transparent;
      color: white;
      cursor: not-allowed;
    }
  }
`;

export { Button };
