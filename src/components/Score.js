import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  z-index: 9999;
  width: 100px;
  height: 100px;
  font-size: 50px;
  position: fixed;
  border-radius: 50%;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
`;

const Score = ({ score }) => <ScoreContainer>{score}</ScoreContainer>;

export default Score;
