import { GUESS_SUCCEED } from './types';

export const guess = color => {
  return {
    type: GUESS_SUCCEED,
    payload: color
  };
};
