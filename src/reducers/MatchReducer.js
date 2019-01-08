import { GUESS_FAIL, GUESS_SUCCEED } from './../actions/types';

const INITIAL_STATE = {
  sequence: [],
  guessed: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GUESS_SUCCEED: // player guesses correctly
      return { ...state, sequence: [...state.sequence, action.payload] };
    case GUESS_FAIL: // player guesses incorrectly
      return { ...state, sequence: [] };
    default:
      return state;
  }
};
