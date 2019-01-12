import {
  START_GAME,
  END_GAME,
  RESET_GAME,
  NEXT_LEVEL,
  GUESS_COLOR
} from './../actions/types';
import { sample } from 'lodash';
import { colors } from './../globals';

const INITIAL_STATE = {
  sequence: [sample(colors)],
  guessed: []
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return { guessed: [], sequence: [...state.sequence] };
    case NEXT_LEVEL:
      return { guessed: [], sequence: [...state.sequence, sample(colors)] };
    case GUESS_COLOR:
      return { ...state, guessed: [...state.guessed, payload.guess] };
    case END_GAME:
      return INITIAL_STATE;
    case RESET_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};