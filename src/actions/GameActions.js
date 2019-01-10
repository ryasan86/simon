import { sample } from 'lodash';
import {
  START_GAME,
  GUESS_COLOR,
  SEQUENCE_ON,
  SEQUENCE_OFF,
  NEXT_LEVEL,
  ACTIVE_PAD
} from './types';
import { colors } from '../globals';

// helpers
export const createAction = (type, payload = {}) => {
  return { type, payload };
};

// actions
const startGame = () => createAction(START_GAME, sample(colors));
const sequenceOn = () => createAction(SEQUENCE_ON);
const sequenceOff = () => createAction(SEQUENCE_OFF);
const nextLevel = () => createAction(NEXT_LEVEL);
const guessColor = payload => createAction(GUESS_COLOR, payload);
const activePad = payload => createAction(ACTIVE_PAD, payload);

export const gameActions = {
  startGame,
  guessColor,
  sequenceOn,
  sequenceOff,
  nextLevel,
  activePad
};
