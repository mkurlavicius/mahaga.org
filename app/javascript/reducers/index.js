import { combineReducers } from 'redux';

import gameReducer   from './gameReducer';
import matchReducer  from './matchReducer';
import moveReducer   from './moveReducer';

export default combineReducers({
  games:    gameReducer,
  matches:  matchReducer,
  moves:    moveReducer
});