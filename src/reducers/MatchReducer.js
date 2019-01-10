import { START_GAME, NEXT_LEVEL, GUESS_COLOR } from './../actions/types';
import { sample } from 'lodash';
import { colors } from './../globals';

const INITIAL_STATE = {
  sequence: [sample(colors)],
  guessed: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      return { guessed: [], sequence: [...state.sequence] };
    case NEXT_LEVEL:
      return { guessed: [], sequence: state.sequence.concat(sample(colors)) };
    case GUESS_COLOR:
      return { ...state, guessed: state.guessed.concat(action.payload) };
    default:
      return state;
  }
};
