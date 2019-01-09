import { START_GAME, NEXT_LEVEL } from './../actions/types';

const INITIAL_STATE = {
  sequence: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, sequence: [action.payload] };
    case NEXT_LEVEL:
      return { ...state, sequence: [...state.sequence, action.payload] };
    default:
      return state;
  }
};
