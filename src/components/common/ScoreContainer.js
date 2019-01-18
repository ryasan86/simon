import styled from 'styled-components';

const ScoreContainer = styled.div`
  z-index: 9997;
  position: absolute;
  border-radius: 50%;
  background: #131313;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  width: 100px;
  height: 100px;
  font-size: 50px;
  @media (max-width: 720px) {
    width: 50px;
    height: 50px;
    font-size: 25px;
  }
`;

export { ScoreContainer };
