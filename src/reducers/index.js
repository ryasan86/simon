import { combineReducers } from 'redux';
import MatchReducer from './MatchReducer';

export default combineReducers({
  match: MatchReducer
});
