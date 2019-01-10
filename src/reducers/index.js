import { combineReducers } from 'redux';
import MatchReducer from './MatchReducer';
import GameReducer from './GameReducer';

export default combineReducers({
  match: MatchReducer,
  game: GameReducer
});
