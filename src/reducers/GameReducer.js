import {
  START_GAME,
  END_GAME,
  RESET_GAME,
  NEXT_LEVEL,
  SEQUENCE_ON,
  SEQUENCE_OFF,
  ACTIVE_PAD
} from './../actions/types';

const INITIAL_STATE = {
  playingSequence: false,
  gameOver: true,
  started: false,
  score: 0,
  activePad: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return { ...state, gameOver: false, score: 0, started: true };
    case END_GAME:
      return { ...state, gameOver: true, score: 0 };
    case RESET_GAME:
      return { ...state, gameOver: true, score: 0, started: false };
    case NEXT_LEVEL:
      return { ...state, score: state.score + 1 };
    case SEQUENCE_ON:
      return { ...state, playingSequence: true };
    case SEQUENCE_OFF:
      return { ...state, playingSequence: false, activePad: '' };
    case ACTIVE_PAD:
      return { ...state, activePad: payload.color };
    default:
      return state;
  }
};
