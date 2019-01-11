import { sample } from 'lodash';
import {
  START_GAME,
  END_GAME,
  GUESS_COLOR,
  SEQUENCE_ON,
  SEQUENCE_OFF,
  NEXT_LEVEL,
  ACTIVE_PAD
} from './types';
import { colors } from '../globals';
import { createAction, sleep, playSound } from './../utils';
import { SEQUENCE_DELAY, colorObj } from './../globals';

// actions
const startGame   = () => createAction(START_GAME, sample(colors));
const endGame     = () => createAction(END_GAME);
const sequenceOn  = () => createAction(SEQUENCE_ON);
const sequenceOff = () => createAction(SEQUENCE_OFF);
const nextLevel   = () => createAction(NEXT_LEVEL);
const guessColor  = payload => createAction(GUESS_COLOR, payload);
const activePad   = payload => createAction(ACTIVE_PAD, payload);

const playSequence = () => async (dispatch, getState) => {
  dispatch(sequenceOn());
  const { sequence } = getState().match;
  for (let i = 0; i < sequence.length; i++) {
    const { color, audioUrl } = colorObj[sequence[i]];
    playSound(audioUrl);
    dispatch(activePad({ color }));
    await sleep(SEQUENCE_DELAY);
    dispatch(activePad({ color: '' }));
    await sleep(SEQUENCE_DELAY);
  }
  dispatch(sequenceOff());
};

export const gameActions = {
  startGame,
  endGame,
  guessColor,
  sequenceOn,
  sequenceOff,
  nextLevel,
  activePad,
  playSequence
};
