import { START_GAME, GUESS_SUCCEED } from './types';

const colors = ['red', 'blue', 'green', 'yellow'];

const startGame = randColor => {
  return {
    type: START_GAME,
    payload: colors[Math.floor(Math.random() * colors.length)]
  };
};

const guess = color => {
  return {
    type: GUESS_SUCCEED,
    payload: color
  };
};

export const matchActions = {
  startGame,
  guess
};
